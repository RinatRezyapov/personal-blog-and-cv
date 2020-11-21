---
title: There is always an Option
date: "2020-11-20T16:12:03.284Z"
description: "Introduction to functional programming with Option container for beginners"
---

## Introduction

When we develop web applications using React and TypeScript we often pass optional props between components.

A common way to show that a prop is optional is to indicate it with a question mark (?) in TypeScript interface:

```jsx
interface IProps {
  label?: string;
}
```

Of course, after we set this prop to optional we have to check if we have some value or this value is undefined. There are a lot of approaches to check it with native JavaScript methods, but in this post, I will describe a functional approach. It’s not a better or worse approach; it’s just different.

In the example above, we set the label prop to be optional.

But what happens when we pass an array as a prop and want to make it optional?

We never do something like that:

```jsx
interface IProps {
  array?: Array<string>;
}
```

After all, if there are no values in the array, we pass an empty array. Pretty obvious. 

When you use array prop, you never think whether this array has items or not. You perform `map` method on this array and wait for results.

Let's assume that you got an array of countries as a prop in React component and you want to render a list of these countries in a `select` input.

If there are some countries in the array then you will see these countries as `options` in `select`.

If there are no countries in the array then you won't see any `options` in `select`, because `map` method won't even fire on an empty array.

```jsx
  <select>
    {countries.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
      ))}
  </select>
```

So what if we will use this "empty array and array with items" approach to indicate absence or presence of just one value of any type? 

## Option to the rescue

This is how `Option` container works.

You just put an optional value inside `Option` container.

If the value is present then `Option` container transforms into `Some` - similar to an array with only one value.

If the value is absent then `Option` container transforms into `None` - similar to an empty array.

If we need to access the value in an `Option` container we use `map` on this container, the same way you use `map` method on an array to access and transform values.


>**Note that `map` in this case is not JavaScript's array built-in method but special `map` that is imported from `fp-ts` library.**

It's that simple. I'm not going to overwhelm you with Functional Programming theory in this article because you don't really need it to start to use  `Option` (at least in the beginning).

## Let's start

You can write your own `Option` container or use some already written solution.

I like this <a href="https://github.com/gcanti/fp-ts" target="_blank" rel="noopener">one</a>.

Let's create a container that consists of a string value.

1. First you need to import `fromNullable` function from `fp-ts` library. This function determines which container to create `Some` or `None`;

2. Next we pass `label` variable value to `fromNullable` function;

3. Since the value of `label` variable is not undefined or null `fromNullable` function will create `Some` container as you can see in `console.log` output in the example below;

4. We can access value inside the container using `map` from `fp-ts` library;

```jsx
import { pipe } from "fp-ts/lib/function";
import { fromNullable, map } from "fp-ts/Option";

const label = "Apple";

const container = fromNullable(label);

console.log(container); // {_tag: "Some", value: "Apple"}

pipe( 
  // we use pipe function from fp-ts to compose functions into one flow
  container,
  map(v => console.log(v)) 
  // we use `fp-ts` map function to access Option container and console Apple value
)

```
<a href="https://codesandbox.io/s/fromnullable-string-value-y4xzw" target="_blank" rel="noopener">Example</a>


But what if we pass the undefined value to `fromNullable` function?

```jsx
import { pipe } from "fp-ts/lib/function";
import { fromNullable, map } from "fp-ts/Option";

const label = undefined;

const container = fromNullable(label);

console.log(container); // {_tag: "None"}

pipe(
  container,
  map(v => console.log(v)) 
  // this value won't appear in the console, because map won't fire
)
```
<a href="https://codesandbox.io/s/fromnullable-undefined-0mrme?file=/src/index.ts" target="_blank" rel="noopener">Example</a>

As you can see, we will get `None` container.

So now we have, let's say, `Some` container with `Apple` value inside. How are we going to extract it and show in our React component's render function?

Let's create React app that renders `Fruit` components with optional label prop.

```jsx
  interface IProps {
    label?: string;
  }

  const Fruit: React.FC<IProps> = ({ label }) => {
    return <h1>The fruit name is: {label}</h1>;
  };

  const App = () => {
    return (
      <div className="App">
        <Fruit label="Apple" />
      </div>
    );
  }

  export default App;
```
<a href="https://codesandbox.io/s/fruit-app-3rdwf?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

To create a container from our optional label variable we will import `fromNullable` function from `fp-ts` library, pass `label` prop to it and assign the result to `container` variable;

```jsx
  const Fruit: React.FC<IProps> = ({ label }) => {
    const container = fromNullable(label);

    return <h1>The fruit name is: {label}</h1>;
  };
```
<a href="https://codesandbox.io/s/fruit-app-with-option-fn85z?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

We can't render `container` variable straight away because right now it's an object. So we need to find out the way to extract this value from the container.

For that, we use `getOrElse` function which returns the value if the container is of type `Some` and returns the default value (placeholder) if the container is of type `None`.

>**Note that you have to pass placeholder value into `getOrElse` function of the same type as the type of the value you want to get from the container. In this case, it's a string.**

To apply `getOrElse` to our container we wrap them into `pipe` function:

```jsx
import { fromNullable, getOrElse } from "fp-ts/Option";
import { pipe } from 'fp-ts/function'

const Fruit: React.FC<IProps> = ({ label }) => {
  const container = fromNullable(label);
  const value = pipe(
    container,
    getOrElse(() => `can't read name of the fruit`)
  );
  return <h1>The fruit name is: {value}</h1>;
};
```
<a href="https://codesandbox.io/s/fruit-app-with-option-extracting-value-94kq3?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

Now we understand how to extract value from `Some` container, e.g. container that consists value.

But what if the value is not present, e.g. `None` container?

Let's pass label props to Fruit component with `undefined` value.

```jsx
const Fruit: React.FC<IProps> = ({ label }) => {
  const container = fromNullable(label);
  const value = pipe(
    container,
    getOrElse(() => `can't read name of the fruit`)
  );
  return <h1>The fruit name is: {value}</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Fruit label={undefined} />
    </div>
  );
};
```
<a href="https://codesandbox.io/s/fruit-app-with-option-none-extracting-value-frdun?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

We will see in the example above that in this case placeholder value will be shown `can't read the name of the fruit`. That's because `fromNullable` function created `None` and `getOrElse` function wasn't able to extract value from `None` falling back to placeholder value.

At this point, you will ask me "Why the heck would you put value in some container and then extract it again if we can just check the presence of the value with native JavaScript methods?". Fair question, I was asking such questions also when I started to work on a codebase that was written using `Option` containers. 

The main difference is that when you use `Option` you are not doing the following things:
1. You are not using `undefined` or `null` at all. In fact, they are represented by `None` container;
2. You almost don't use `if` statement and don't nest them, the code becomes flat;
3. Because you almost don't use `if` statement you also stop using reassigns, e.g. `let` variables;
4. `getOrElse` forces you to return default value with the same type as the type of the value that you want to get from the container. As a result, your variables hold the value of only one type, which in my opinion makes your code more predictive;

Let's look at other examples of how to use `Option`.

## Accessing deeply nested values

Let's say you have an API that responses with user profile object with most of the fields optional.
```jsx
interface IProps {
  user?: {
    email: string;
    personal?: {
      name?: string;
    },
  };
}
```

To get the `name` value, some of us would do something like this:
```jsx
  const userName = user && user.personal && user.personal.name ||  `can't retrive`;
```

Others would do
```jsx
  const userName = user?.personal?.name || `can't retrive`;
```


And that's how we do it with `Option` container:

```jsx
  // we put user prop into container because user prop could be undefined
  const userOpt = fromNullable(user);

  // we use pipe function from fp-ts to compose all functions into one flow
  const userName = pipe(
    userOpt,  // first we get our user container
    chain((v) => fromNullable(v.personal)), 
    // we put personal into container because it could also be undefined
    // we use chain to create one Option from two nested Options: Option<Option>
    chain((v) => fromNullable(v.name)),
    getOrElse(() => `can't retrive`) 
    // we try to get the value, if we can't we return default value of the same type
  );
```
<a href="https://codesandbox.io/s/fruit-app-with-option-deeply-nested-optional-values-jqti5?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

Why we use several `fromNullable` in the example above? Because any possibly undefined values should be wrapped in a container.

What is `chain`? When we use `fromNullable` inside another container we create nested `Option` containers like this: `<Option<Option<string>>>`. To flatten this, we use `chain`. It's a pretty common pattern in Functional Programming.


## Object with Option fields

The other good thing is that now you almost don't need to create optional values or explicitly set value to `undefined` or `null`. If you want to indicate that name value can be undefined you just specify it in TypeScript interface as `Option<string>`.

If you have a string value to pass, you pass it as `some('Bob')`.

If you don't have a string to pass, you pass it as `none`.

```jsx
interface IProps {
  user?: {
    email: string;
    personal?: {
      name: Option<string>; // name value can be some("Bob") or none
    };
    billing?: {
      balance: Option<number>; // balance value can be some(50) or none
    };
  };
}

const Profile: React.FC<IProps> = ({ user }) => {
  const userOpt = fromNullable(user);
  const userName = pipe(
    userOpt,
    chain(v => fromNullable(v.personal)), 
    chain(v => v.name), 
    // we have to use chain here instead of map 
    // because name is already an Option container
    getOrElse(() => `can't retrive the name`)
  );
  const userBalance = pipe(
    userOpt,
    chain(v => fromNullable(v.billing)),
    chain(v => v.balance), 
    // we have to use chain here instead of map
    // because balance is already an Option container
    getOrElse(() => 0)
  )
  return <div>
    <h1>Name: {userName}</h1>
    <h2>Balance: ${userBalance}</h2>
  </div>;
};

const App = () => {
  return (
    <div className="App">
      <Profile
        user={{
          email: "bob@mail.com",
          personal: {
            name: some("Bob") // we have name value, so we pass some("Bob")
          },
          billing: {
            balance: none // we don't have balance value, so we pass none
          }
        }}
      />
    </div>
  );
};

```
<a href="https://codesandbox.io/s/fruit-app-with-option-object-with-option-fields-ouvrj?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

## Check condition

Let's check if our user's email is equal to "bob@mail.com".
```jsx
interface IProps {
  user?: {
    email: string;
    personal?: {
      name?: string;
    },
    billing?: {
      balance?: number;
    }
  };
}

const userOpt = fromNullable(user);

const isBob = pipe(
  userOpt,
  map((v) => v.email === "bob@mail.com"),
  getOrElse(() => false)
);
```
<a href="https://codesandbox.io/s/fruit-app-with-option-check-condition-zsbi2?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

Here we use `map` from `fp-ts` to access `Option` container, but we are not extracting email value with `getOrElse` right away. First, we take string value (email) and convert it to boolean with strict equality check and only then we extract boolean value with `getOrElse` with default value `false`.

## Performing side effects from Option containers

You can perform side effects from Option container. You just perform `map` on the container and if the container is of type `Some` the side effect will be performed, if `None` nothing will happen because `map` won't fire on `None` container.

```jsx
interface IProps {
  alertMsg: Option<string>;
}

const Browser: React.FC<IProps> = ({ alertMsg }) => {
  React.useEffect(() => {
    pipe(
      alertMsg,
      map((title) => alert(title)) // we perform map on alertMsg container
    );
  }, [alertMsg]);

  return <div>Browser Component</div>;
};

const App = () => {
  return (
    <div className="App">
      <Browser alertMsg={some("Use Option")} /> 
      {// try to pass none and you will see that alert won't fire}
    </div>
  );
};
```
<a href="https://codesandbox.io/s/fruit-app-with-option-performing-side-effects-kgtdh?file=/src/App.tsx" target="_blank" rel="noopener">Example</a>

## Conclusion

There are many other ways in which you can use `Option`. The main difference of this approach compared to the traditional way of coding is that with `Option` containers you kind of create a pipe in which you put a value and access it with `map` and you don't care if the value is undefined because in this case `map` method won't even fire and won't throw any errors, you will just get `None` value at the end of the pipe which could not meet your expectations :)

From my experience, using this approach in React app with TypeScript with more than 2k components and pretty complex logic made the process of developing much more predictable and error-prone. So I encourage you to at least try this approach and see how it goes. It's also a good starting point for developers who want to become more familiar with Functional Programming. 