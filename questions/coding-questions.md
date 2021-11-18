---
title: Coding Questions
layout: layouts/page.njk
permalink: /questions/coding-questions/index.html
---

Question: What is the value of `foo`?
```javascript
var foo = 10 + '20'; -1020-
```

Question: What will be the output of the code below?
```javascript
console.log(0.1 + 0.2 == 0.3); -Technically true but false as well cause .1 +.2 is like not .3-
```

Question: How would you make this work?
```javascript
add(2, 5); // 7
const add = (a, b) => a + b;
add(2)(5); // 7
const add2 = a => b => a + b;

const add=(a, b)=>{ 
 if(a && b) return a+b;
 else return buffAdd=(b)=>{return a+b}  
};
```

Question: What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join(""); -goh angasal a m'i-
```

Question: What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) ); -undefined-
```

Question: What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar); -Hello World-
})();
alert(foo + bar); -undefined-
```

Question: What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2); -2-
```

Question: What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2}; -undefined-
```

Question: What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four'); -one, two, three, four-
```

Question: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse(); 
});
-callback invoked-
doSomething().then(function () {
  doSomethingElse();
});
-nothing will return so the next promise will execute but with undefined-
doSomething().then(doSomethingElse());
-doSomethingElse happens-
doSomething().then(doSomethingElse);
-passing a parameter after doSomething-
```

Question: What will the code below output to the console and why?
```javascript
(function(){
  var a = b = 3;
})();
-Silently assigns 3 to a global variable b-

console.log("a defined? " + (typeof a !== 'undefined')); a
console.log("b defined? " + (typeof b !== 'undefined')); 3
```

Question: Consider the two functions below. Will they both return the same thing? Why or why not?
```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return //get a automatic semicolon insert here//
  {
      bar: "hello"
  };
}
```
