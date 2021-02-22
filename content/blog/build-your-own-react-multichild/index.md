---
title: Build your own React.js - Part 3. MultiChild
date: "2021-02-22T20:00:00.000Z"
description: "We will try to build a simple version of popular UI library - React.js. In this article we will implement MultiChild class"
---

## Table Of Content
* [Introduction](#introduction)
* [Two cases of multichild](#two-cases-multichild)
* [Implementing MultiChild class](#implementing-multichild)
* [ChildReconciler](#child-reconciler)
* [Rendering](#rendering)

## Introduction <a name="introduction"></a>

This is the third part of *Build your own React.js series*. Click [here](https://dev.to/rinatrezyapov/build-your-own-react-js-part-2-react-component-350h) if you didn't read the second part.

In this part, we are going to implement the logic for rendering multiple children. It's a very important feature because without it React.js applications would consist of only one element and one child. Although you could have such mini components in your app it's not practical.

## Two cases of multichild <a name="two-cases-multichild"></a>

In the previous article, we rendered our first class component <a href="https://codesandbox.io/s/building-your-own-reactjs-reactcomponent-xq0rh" target="_blank" rel="noopener">into DOM</a>.

```js
  // index.js

  class App extends Component {
    render() {
      return {
        type: "div",
        props: { children: `We are building ${this.props.title}` }
      };
    }
  }
```

Our App class component has a `children` prop which is basically a string. JSX version of it would look like this:

 ```jsx
  // index.js

  class App extends Component {
    render() {
      return (
        <div>
          {`We are building ${this.props.title}`}
        </div>
      )
    }
  }
```

How to render more children? To do this, we need to be able to handle an array of children. Like this:


```js
  // index.js

  class App extends Component {
    render() {
      return {
          type: "div",
          props: { 
            children: [
              {
                type: "h1",
                props: { 
                  children: `We are building ${this.props.title}` 
                }
              }, 
              {
                type: "h2",
                props: { children: `And it's cool!` }
              }
            ]
          }
      }
    }
  }

```
or JSX version:
```jsx
  // index.js

  class App extends Component {
    render() {
      return (
           <div>
             <h1>
               {`We are building ${this.props.title}`}
             </h1>
             <h2>
               {`And it's cool!`}
             </h2>
           </div>
      )
    }
  }

```

And here I want to stop a little bit on the cases of multi-child. There are actually two that you probably use every time but not aware that they are handled by React.js a little bit differently. 

The first case is rendering DOM elements by declaring them in the render method like this:
```jsx
    <div>
      <h1></h1>
      <h2></h2>
    <div>
```

Another one is rendering an array of DOM elements or strings like you usually do when you get an array of data from the server and want to show this data to the user:
```jsx
   <div>
     {["Are we?", "Really?", ["Well...", "That is impressive"]]}
   <div>
```
Doesn't matter if in reality we would `map` over it and wrap each string into `p` element, React.js will handle any case.

>Note, that an array can consist of subarrays and these cases also should be handled.

Why I separate these cases? Because in the second one, when we render an array of subarrays there is no such term as children. You can't say that subarray `["Well...", "That is impressive"]` is children of its parent array, it's still children of `div` but we need to somehow indicate that it's subarray when we render it.

Yes, it's confusing so let's build MultiChild class to clarify this.

## Implementing MultiChild class <a name="implementing-multichild"></a>

From the previous articles, we remember that `instantiateComponent` function handles elements with children. It checks if the `type` of the element object is `string` e.g. 'div' and if so passes it to `HostComponent.construct` which in turn  uses `DOMComponentWrapper` to create DOM element:

```js
// Component.js

function instantiateComponent(element) {
  let wrapperInstance;
  if (typeof element.type === "string") {
    wrapperInstance = HostComponent.construct(element);
  }
  ...
  return wrapperInstance;
}

// HostComponent.js

function construct(element) {
  return new DOMComponentWrapper(element);
}
```

Since `DOMComponentWrapper` class creates the actual DOM element and it's children we need to handle multi children there. We will extend the existent `_createInitialDOMChildren` method of the `DOMComponentWrapper` class with the handler for `props.children` of array type:

```js
// DOMComponentWrapper.js

//before
_createInitialDOMChildren(props) {
    if (typeof props.children === "string") {
      this._domNode.textContent = props.children;
    }
  }

//after
  _createInitialDOMChildren(props) {
    if (typeof props.children === 'string') {
      this._domNode.textContent = props.children;
    } else if (Array.isArray(props.children)) {
      let mountImages = this.mountChildren(props.children);
      DOM.appendChildren(this._domNode, mountImages);
    }
  }
``` 

You probably spotted a new `this.mountChildren` method there that `DOMComponentWrapper` class doesn't have. This method is a method of `MultiChild` class that we are going to implement and extend `DOMComponentWrapper` from it.

```js
  // MultiChild.js

  class MultiChild {
  
   const renderedChildren = ChildReconciler.instantiateChildren(children);
   this._renderedChildren = renderedChildren;

    return Object.keys(renderedChildren).map((childKey, i) => {
      let child = renderedChildren[childKey];
      child._mountIndex = i;
      return Reconciler.mountComponent(child);
    });
  }
```

```js
// DOMComponentWrapper.js

class DOMComponentWrapper extends MultiChild {
  constructor(element) {
    super();
    this._currentElement = element;
    this._domNode = null;
  }
...
```
Notice we added `super()` into `DOMComponentWrapper` constructor. It's basically the way of calling `MultiChild` class (parent) constructor before using `DOMComponentWrapper` class (child) constructor. More about that [is here](https://css-tricks.com/what-is-super-in-javascript/).

Now let's stop at `ChildReconciler.instantiateChildren`. [The author of the original implementation](https://github.com/zpao/building-react-from-scratch/blob/master/dilithium/src/MultiChild.js#L83) added the following comment:
>Instantiate all of the actual child instances into a flat object. This handles all of the complicated logic around flattening subarrays.

By reading this you normally think that it takes an object of elements and it's children and children's children and transforms it into a flat object. And it's a valid thought. But turns out that this function is implemented for slightly different purposes.

Unfortunately, our `App` class component has quite simple elements structure in its `render` and  we won't see both two cases of multi-child that I mentioned later. So let's change the `children` prop of `h1` element into an array in our `App` class component:
```js
// index.js

{
      type: "div",
      props: { 
        children: [
          {
            type: "h1",
            props: { 
              children: [
                `We are building ${this.props.title}`, 
                [
                  'Are we?', 
                  'Really?', 
                  [
                    'Well...', 
                    'That is impressive'
                  ]
                ]
              ]
            }
          }, 
         {
           type: "h2",
           props: { children: `And it's cool!` }
         }
        ]
      }
  }
``` 

Now the `children` prop is an array of strings that contains another array of strings and so on. You might be confused by this example because in a real React.js app we use flat array of data and then transform it into elements using `map` method. But this example is also completely valid and I used it intentionally to show why `ChildReconciler.instantiateChildren` is necessary. 

By the way, this is how the example above looks in JSX:
```jsx

      <div>
        <h1>
          {[`We are building ${this.props.title}`, ['Are we?', 'Really?', ['Well...', 'That is impressive']]]}
        </h1>
        ...
      </div>

```
Now let's look at the abstract version of the output of `ChildReconciler.instantiateChildren`:

```js
{
  '.0.0': "We are building Reactjs",
    '.1:0.0': "Are we?",
    '.1:1.0': "Really?",
      '.1:2:0.0': "Well...",
      '.1:2:1.0': "That is impressive",
}
```
[Minimizing nesting](https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style/Minimize_nesting) is a common pattern in computer programming. This transformation will help not only to mount deeply nested children but also update them in the future.


##ChildReconciler <a name="child-reconciler"></a>

Let's create ChildReconciler.js file and implement `instantiateChildren` in it.

```js
// ChildReconciler.js

function instantiateChildren(children) {
  let childInstances = {};

  traverseAllChildren(children, instantiateChild, childInstances);

  return childInstances;
}
```
`instantiateChildren` holds `childInstances` object and passes it by reference to `traverseAllChildren` function. Once `traverseAllChildren` function is finished and `childInstances` object is populated, it returns it.

We also pass `instantiateChild` function to `traverseAllChildren` function as the second parameter. This function just checks if a child is already present in the `childInstances` object. If it's not present (isUnique) then it passed to `instantiateComponent` to be mounted into DOM and the result is added into `childInstances` object. `name` here is a unique identifier of the child that is generated by depth in the tree (mount index) and parent. Real React.js library also uses `key` prop here.
```js
function instantiateChild(childInstances, child, name) {
  let isUnique = childInstances[name] === undefined;

  if (isUnique) {
    childInstances[name] = instantiateComponent(child);
  }
}
```
It's a little bit confusing here that `instantiateChild` function isn't declared in one file with `traverseAllChildren` and passed as a parameter but try to think of it in a way that `traverseAllChildren` takes `childInstances` object and `instantiateChild` function and use this function to populate `childInstances` object. Let's see how it happens:
```js
// traverseAllChildren.js

const SEPARATOR = ".";
const SUBSEPARATOR = ":";

function traverseAllChildren(children, callback, traverseContext) {
  return traverseAllChildrenImpl(children, "", callback, traverseContext);
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  callback,
  traverseContext
) {
  if (!Array.isArray(children)) {
    callback(
      traverseContext,
      children,
      nameSoFar + SEPARATOR + getComponentKey(children, 0)
    );
    return 1;
  }

  let subTreeCount = 0;
  let nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  children.forEach((child, i) => {
    let nextName = nextNamePrefix + getComponentKey(child, i);
    subTreeCount += traverseAllChildrenImpl(
      child,
      nextName,
      callback,
      traverseContext
    );
  });

  return subTreeCount;
}

```
As you can see `traverseAllChildren` just calls `traverseAllChildrenImpl`. The first thought that you might have is that "Why just not call `traverseAllChildrenImpl` directly?". It's called in such a way because `traverseAllChildrenImpl` actually calls itself with the second parameter `nameSoFar` being always different (empty string at first call and then string identifier for a child). Of course, there are ways to call it directly with preserved functionality but that's not the scope of this article.

Before trying to understand how this quite big function works let's stop at `getComponentKey` function. Note how the `component` parameter of the function is not used but the author of the original implementation still left it here. That's because here React.js library uses the `key` prop to generate a unique id but we will just use `toString(36)`. Number `36` is a radix. For numbers from 0 to 9, it will give a normal string representation of the number. For greater numbers it will use the letters of the alphabet alongside numbers, for example for `55` it will be `1j`:

```js
  function getComponentKey(component, index) {
    return index.toString(36);
  }
```
It's important to understand that `traverseAllChildrenImpl` function has two parts: one for non-array children and the second for array children. Also this function calls itself recursively and preserves `subTreeCount` alongside this calls by returning a number after each call. 

`subTreeCount` is the counter for the number of children. We can't just use `children.length` here because as we saw earlier an array of children can contain subarrays. 

Let's look at how `traverseAllChildrenImpl` processes our `App` class component:

```js
type: "array"
nameSoFar: ""
parent: "div"
children: ["h1", "h2"]

type: "non-array" 
nameSoFar: ".0.0"
parent: "div" -> "array" // we can treat array also as a parent
children: "h1"

type: "non-array" 
nameSoFar: ".1.0"
parent: "div" -> "array"
children: "h2"

type: "array"
nameSoFar: ""
parent: "h1"
children: ["We are building Reactjs", ["Are we?", "Really?", ["Well...", "That is impressive"]]]

type: "non-array"
nameSoFar: ".0.0"
parent: "h1" -> []
children:  "We are building Reactjs"

type: "array"
nameSoFar: ".1"
parent: "h1" -> []
children:  ["Are we?", "Really?", ["Well...", "That is impressive"]]

type: "non-array"
nameSoFar: ".1:0.0"
parent: "h1" -> [[]]
children:  "Are we?"

type: "non-array"
nameSoFar: ".1:1.0"
parent: "h1" -> [[]]
children:  "Really?"

type: "array"
nameSoFar: ".1:2"
parent: "h1" -> [[]]
children:  ["Well...", "That is impressive"]

type: "non-array"
nameSoFar: ".1:2:0.0"
parent: "h1" -> [[[]]]
children:  "Well..."

type: "non-array"
nameSoFar: ".1:2:1.0"
parent: "h1" -> [[[]]]
children:  "That is impressive"
```
I think that a developer who knows how to `console.log` a function properly has a great advantage in quickly understanding what this function does. You will have your opportunity to `console.log` this function in a codesandbox example at the end of this article.

Again, don't get frustrated about not understanding some parts, it will come with time, just return to the example from time to time.

>Note that ':' in `nameSoFar` denotes the fact that we entered a subarray. And '.0' at the end means that it's the non-array child.

Notice also that when children argument is not an array it calls `callback` function which is `instantiateChild` function. It actually populates `childInstances` object that we get at the end.
```js
// ChildReconciler.js

function instantiateChild(childInstances, child, name) {
  let isUnique = childInstances[name] === undefined;
  if (isUnique) {
    childInstances[name] = instantiateComponent(child);
  }
}
```
As you can see we call `instantiateComponent` from `instantiateChild`. We know that `instantiateComponent` handles two types of elements:
1. Elements that has `typeof type === 'string'` (e.g. `{ type: 'div', props: ... }`);
2. Elements that has `type` field pointed to class: `{ type: App, props: ... }`;

But now as you can see we added another type of element which is a simple string, e.g. an element of the array `["Are we?", "Really?", ... ]`. So now we need to also handle this type of elements:

```js
// Component.js 

// before
function instantiateComponent(element) {
  let wrapperInstance;
  if (typeof element.type === "string") {
    wrapperInstance = HostComponent.construct(element);
  } else {
    wrapperInstance = new element.type(element.props);
    wrapperInstance._construct(element);
  }

  return wrapperInstance;
}

// after
function instantiateComponent(element) {
  let wrapperInstance;
  if (typeof element.type === "string") {
    wrapperInstance = HostComponent.construct(element);
  } else if (typeof element.type === 'function') {
    wrapperInstance = new element.type(element.props);
    wrapperInstance._construct(element);
  }  else if (typeof element === 'string' || typeof element === 'number') {
    wrapperInstance = HostComponent.constructTextComponent(element);
  }

  return wrapperInstance;
}
```
As you can see, `typeof element === 'string' || typeof element === 'number'` checks if elements is a simple string or number and then we call `HostComponent.constructTextComponent`. Let's add this function to `HostComponent` file:

```js
// HostComponent.js
function constructTextComponent(element) {
  return construct({
    type: "span",
    props: {
      children: element
    }
  });
}
```
Basically, every string and number is wrapped in a `span` element using `construct` function which calls `DOMComponentWrapper` wrapper class.

##Rendering<a name="rendering"></a>

We are almost finished. Now let's go to the place where all this started.

```js
// MultiChild.js

class MultiChild {
  mountChildren(children) {
    const renderedChildren = ChildReconciler.instantiateChildren(children);
    this._renderedChildren = renderedChildren;

    return Object.keys(renderedChildren).map((childKey, i) => {
      let child = renderedChildren[childKey];
      child._mountIndex = i;

      return Reconciler.mountComponent(child);
    });
  }
}
```

After we've got `renderedChildren` flat object we transform it into an array of keys `[".0.0", ".1:0.0", ...]`, iterate over it and assign this keys to the respective child's property `_mountIndex`. We will use `_mountIndex` in the future when we perform updates. Then we call `Reconciler.mountComponent` with each child to get DOM element and all this is getting returned `return Object.keys(renderedChildren)` to the DOMComponentWrapper's `_createInitialDOMChildren` method and assigned into `mountImages` variable in the form of an array of DOM elements - `[span, span, span, ...]`

```js
// DOMComponentWrapper.js

_createInitialDOMChildren(props) {
    if (typeof props.children === "string") {
      this._domNode.textContent = props.children;
    } else if (Array.isArray(props.children)) {
      let mountImages = this.mountChildren(props.children);
      DOM.appendChildren(this._domNode, mountImages);
    }
  }
```

Now we can append these DOM elements into our root `node`:

```js
// DOM.js

function appendChildren(node, children) {
  if (Array.isArray(children)) {
    children.forEach(child => appendChild(node, child));
  } else {
    appendChild(node, children);
  }
}
```

That's it, we <a href="https://codesandbox.io/s/build-your-own-reactjs-part-3-multichild-iez1b?file=/src/index.js" target="_blank" rel="noopener">did it</a>!

This is a flowchart of what we've covered so far:
![part-3-flowchart-withback](https://rrezyapov.com/part-3-flowchart-withback.png)

Feel free to open it in the second tab/monitor and go through this article again.

Now if you think that it was difficult, hold on! We are going to implement update logic in the following articles.

Links:
1. <a href="https://github.com/RinatRezyapov/build-own-reactjs/tree/ef1e22fd75ba430a7d1f0da91dc10da7715f5a04" target="_blank" rel="noopener">Github repo with the source code from this article</a>
2. <a href="https://codesandbox.io/s/build-your-own-reactjs-part-3-multichild-iez1b" target="_blank" rel="noopener">Codesandbox with the code from this article</a>
3. <a href="https://www.youtube.com/watch?v=_MAD4Oly9yg" target="_blank" rel="noopener">Building React From Scratch talk</a>
4. <a href="https://reactjs.org/docs/implementation-notes.html" target="_blank" rel="noopener">React.js docs regarding Building React From Scratch talk</a>