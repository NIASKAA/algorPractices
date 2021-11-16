---
title: JavaScript Questions
layout: layouts/page.njk
permalink: /questions/javascript-questions/index.html
---

* Explain event delegation. -The process when we group a bunch of element together because they all can perform the same task so we dont have to manually write out 99 event handlers-

* Explain how `this` works in JavaScript. -Usually means the object that owns the method-
  * Can you give an example of one of the ways that working with `this` has changed in ES6? -ES6 lets you use arrow functions to an enclosing scope-

* Explain how prototypal inheritance works. -It basically is a reference to another object, if the object property is not found it will look for one until it finds one with the proto property, also in short, extending properties and method for other functions-

* What's the difference between a variable that is: `null`, `undefined` or undeclared? -undeclare is when a variable does not have a var set. undefined is when the variable is not define nor does it have a type, null just doesnt have a value-
  * How would you go about checking for any of these states? -console logging-

* What is a closure, and how/why would you use one? -They are expressions that refers to local variables of the outer function, it is use for data privacy, also could be grouping functions into a small funciton call in a outer scope -

* What language constructions do you use for iterating over object properties and array items? -for-in loops and object.keys() for object and for, forEach, for arrays-

* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other? -forEach will run a callback for each element and will not return a value as map will turn each element into a new array for result. So if you don't want to change the original array, you would use map-

* What's a typical use case for anonymous functions? -callbacks functions-

* What's the difference between host objects and native objects? -Host objects are what the browser or node.js will provide where as Native is what javascript will provide-

* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? -I think that function Person(){} is just a regular function declaration where as var person = Person() calls for the Person function, var person = new Person() will create a Person object with the new operator-

* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` -Javascript will read function foo() {} (); as function (){} (); so it will call a function with no name specified, to fix it you need to but in (function foo(){})() or (function foo(){}());-

* Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two? -Both are used to call functions but .call takes in comma separated arguments as .apply takes in arrays-

* Explain `Function.prototype.bind`. -Bind() creates a new function that has the this keyword, it can help pass in value easier into other functions-

* What's the difference between feature detection, feature inference, and using the UA string? -Feature detection will always check if the browser supports the code and run different codes if it doesn't, feature infernce will also check but uses other functions because it thinks other countermeasures already exist, UA string will use network protocol to identify application type-

* Explain "hoisting". -It is a way to describe the behavior of how variables will move to the top of the function or code, usually this also means that those set variables will render out first-

* Describe event bubbling. -This goes hand to hand with event delegation where it starts from target element to the top element-

* Describe event capturing. -The opposite of event bubbling where it starts from the top element to the target element-

* What's the difference between an "attribute" and a "property"? -Attributes are defined on the HTML side while properties are defined in DOM-

* What are the pros and cons of extending built-in JavaScript objects? -Pros are when you want to create a polyfill, which is your own implementation for a certain method, cons are possible errors that can happen and will break methods-

* What is the difference between `==` and `===`? -== is when the value will return true from an equality comparsion as === will not do that and return false-

* Explain the same-origin policy with regards to JavaScript. -It prevents Javascript from maing request across domain boundaries. Also prevents malicious scripts on a page to obtain sensitive data through DOM-

* Why is it called a Ternary operator, what does the word "Ternary" indicate? -Because it accepts 3 operands, Ternary means three-

* What is strict mode? What are some of the advantages/disadvantages of using it? -It enables strict mode to a restricted version of javascript, some advantages are it makes it impossible to create accidental global variables, requires function parameter to be unique and can catch certain errors. Disadvantages are it will be lacking certain keywords or even features-

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? -The advantages are it can fix some problems in Javascript and let you write better quality code, disadvantages are it will require a build process, debugging can be annoying if you dont know how to do so-

* What tools and techniques do you use debugging JavaScript code? -Chrome devtools, console.log, any debug statements-

* Explain the difference between mutable and immutable objects. -Mutable object is when an object state can be modified after it's creation while immutable is the opposite of that-
  * What is an example of an immutable object in JavaScript? -Math, Date-
  * What are the pros and cons of immutability? -It is easier to create objects that are immutable but bad implementations of immutable data structures would be bad performance-
  * How can you achieve immutability in your own code? -There are some libraries like immutable.js that can help you with that, or using const-

* Explain the difference between synchronous and asynchronous functions. -Async functions accepts a callback as parameter and will run immediately. It is better to run bigger operations with async func (querying database) so it wont freeze the UI. Sync func will pause the program if it does not complete the current statement-

* What is event loop? -Event loop is when it checks the call stack and keeps track of the functions, it will send in new functions and dequeue old ones and repeats cycle-
  * What is the difference between call stack and task queue? -Call stack monitors and task will perform the task-

* What are the differences between variables created using `let`, `var` or `const`? -Var is scoped to the function it was created while let and const are only accessible with the nearest function-

* What are the differences between ES6 class and ES5 function constructors? -ES6 constructors comes with inheritance-

* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions? -You dont have to use function keyword to create functions, you definitely need arrow functions for React-

* What advantage is there for using the arrow syntax for a method in a constructor? -The value of this gets set to the function so when the constructor create a new object, this will always refer to that object-

* What is the definition of a higher-order function? - A higher function is any function that takes more than one function arguments, example would be map which takes an array along with the function for argument and transform the data-

* Can you give an example for destructuring an object or an array? -Array, 
const foo = ['one', 'two', 'three']; 
const [one, two, three] = foo; 
let a = 1;
let b = 3;
[a, b] = [b, a];

object, 
const o = {p: 42, q: true};
const {p, q} = o;-


* Can you give an example of generating a string with ES6 Template Literals? const person = {name: 'Tyler', age: 28};

* Can you give an example of a curry function and why this syntax offers an advantage? -Pattern wwhere a function with multiple parameter is broken into several functions. This is useful to write codes that are just easier to read-
  
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`? -It makes it easy to create copies of array for spread, rest lets you include a number of arguments to be pass to the function-

* How can you share code between files? -As long as global variables are declared the client side should be able to refer to it, commonJs for backend-

* Why you might want to create static class members? -Static class are not tied to specific instance of class-

* What is the difference between `while` and `do-while` loops in JavaScript? -So basically while loop will run under the condition given is true but in a do while loop, the condition given is check after the loop goes through and will iterate if the condition is true. So do while loop will always run once whether it is false or true-

* What is a promise? Where and how would you use promise? -A promise is an object that will produce a value whether it is fulfilled, rejected or pending. Some use case of it is when you want to avoid callback hell, and making async codes-


## Coding questions
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

function duplicate(arr) {
  return arr.concat(arr);
}
duplicate([1,2,3,4,5]);

or 

const duplicate = (arr) => [...arr, ...arr];
duplicate([1,2,3,4,5]);

* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        document.write(x);
    } else {
        if( x % 3 == 0 ) {
            document.write("fizz");
        }
        if( x % 5 == 0 ) {
            document.write("buzz");
        }
    }
    document.write('<br>'); 
}​

* What will be returned by each of these?
```javascript
console.log("hello" || "world") 
console.log("foo" && "bar")
```

* Write an immediately invoked function expression (IIFE)

(function bob() {
  //
}) ()


* Redux explanation 

-First we start off with our components dispatching actions that will go into our reducers that will now go into the store of the application and trigger a subscription action that 
will pass an updated version of the state as props that will go back to our component-

* OAuth 2.0 simple explanation

-We have 3 different locations to start off with, the google auth, our user, and the client server. First our user will attempt to connect to the server which will trigger 
a response to bring our user to google and connect. Then google will give a response to our user to give authorization that will allow the consent to login, which will unlock the content-