---
title: My experience migrating projects to Next.js
date: "2021-04-30T20:00:00.000Z"
description: "Some things to consider before moving a project to Next.js"
---

[Official documentation](https://nextjs.org/docs/migrating/from-create-react-app) about migration to Next.js is pretty comprehensive and guides you through almost all the common steps that you need to take in the process.

Still, there could be some use cases specific only to your React.js application. 

## Pages folder
Next.js bases its file system routing on `pages` folder. This is a pretty neat approach but comes with some limitations. The problem with classic React.js applications is that some of them might not even have `pages` folder or have it deeply nested in the folder structure.
```
root
|
└───src
│   │
│   └───app
│       │   App.tsx
│       │   ...
|       └───pages
│   
└───template
│   │
│   └───components
│   └───colors
```
More to that - Next.js allows [only two locations](https://github.com/vercel/next.js/issues/4315#issuecomment-522263598) of `pages` folder:
* `root/pages`
* `root/src/pages`

So keep in mind that you'll have to do some folder structure refactoring before moving to Next.js.

## Components that use Web API
You probably know that you can't use `window` object server-side and you need to always check whether `window` is defined before accessing it.

For components that extensively use Web API (charts, animations) and too complex to refactor, it's easier to dynamically import the whole component from the parent component.

```jsx
import dynamic from 'next/dynamic';

const ChartsComponent = dynamic(
  async () => dynamic(() import('app/components/ChartsComponent')),
  { ssr: false },
)
```

## Next Router isReady
Sometimes a user is redirected to your React.js application from other services with some information in query parameters. It could be an email about registration confirmation with confirmation token: `https://yourReactApp.com/token` or redirection from a OAuth provider.
In such cases you usually catch these query parameters using `window.location.search` and then process them.
I noticed that when I moved my application to Next.js these query parameters didn't appear in Next's router at first render and only on the second render I could see them in `router.query`. This behaviour broke my authentication process. Turned out that this is because Next's router fields are [updated server-side first](https://github.com/vercel/next.js/issues/8259) and only then client-side. To skip the first update with the empty query you have to use `router.isReady` field in `useEffect` hook as a second argument:
```jsx
import { useRouter } from 'next/router';

const RedirectsCatcherComponent = () => {
  const router = useRouter();
  useEffect((() => {
    if (router.query.token) {
      proceedAuthentication(router.query.token);
    }
  }), [router.isReady])
}
```


## Dockerfile
If you use Docker containers in your infrastructure you could use the example of Dockerfile in [the official documentation](https://nextjs.org/docs/deployment#docker-image) or if you use `npm`:
```docker
FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install --production

USER node

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 3000

ENV NODE_OPTIONS=--max_old_space_size=1024

CMD ["npm", "start"]
```
Basically what it does here is it builds static assets using production and dev dependencies and then install only production dependencies that needed to start Next.js server.

Notice `ENV NODE_OPTIONS=--max_old_space_size=1024` here. If your Docker container resources are limited, the build process sometimes might crash with the error `Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`. This environment variable solves the problem. Just make sure that is slightly lower value is set than Docker container memory limit value.

## You are not static anymore
>With great power comes great responsibility

I'm sure you decided to use Next.js mainly because you wanted to improve the performance of your React.js application with server-side rendering.
One thing to consider is that you as a frontend developer will be responsible for running Node.js server that will serve static assets. Everything that is running tends to crash, so bear in mind that you will need to consider some kind of failover solution. It could be [pm2](https://github.com/vercel/next.js/issues/109) or [Nomad](https://learn.hashicorp.com/tutorials/nomad/failures) or even multiple Docker containers in nginx upstream configuration.  

## Can Next.js replace nginx?
It depends on what kind of job your nginx performs. If it's only modifying headers then Next.js [can do it also](https://nextjs.org/docs/api-reference/next.config.js/headers). It even can set security headers with [the help of a third party library](https://github.com/jagaapple/next-secure-headers). 
For some more advanced use cases, such as determining the real user's IP address you would probably need to use [custom Next.js server](https://nextjs.org/docs/advanced-features/custom-server).

## Authentication
As I said before, if you are using Next.js you are probably going to use server-side rendering.
A typical client-side React.js application usually uses JWT tokens for authentication and stores them in a browser's storage.
As you may also know browser's storage is not available server-side and you won't be able to get tokens and use them to make authenticated requests to the backend and render authenticated pages server-side. 
If it's your case then you need to think about storing authentication tokens in cookies. After that you will be able to get authentication tokens in `req.headers.cookie` server-side.
```js
async function getServerSideProps(context) {
  if (req.headers.cookie) {
    const token = getToken(req.headers.cookie);
    // make requests
  }
}
```
If you need to perform authentication client-side you just retrieve the cookies from the browser.

The process of moving from browser's storage to cookies in terms of storing tokens is usually pretty complex, especially if you are using an OAuth protocol. 
If you store tokens client-side then you probably have a mechanism that periodically refreshes these tokens and checks if they are valid. You will need to move this mechanism to the backend side since the backend will be responsible for handling tokens and putting them in cookies. If you are using an OAuth provider, it's even harder. So think about this step in advance.

For now, that's it. From my experience, migrating to Next.js most of the time was a surprisingly positive experience, so if you planned to move to Next.js - make preparations and do it now!
