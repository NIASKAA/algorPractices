---
title: CSS Questions
layout: layouts/page.njk
permalink: /questions/css-questions/index.html
---

* What is CSS selector specificity and how does it work? -it basically means that the browser will follow the most relevant rule if there are more conflicting css rules stated. Usually the browser will count the last rule stated-

* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why? -resetting is when you take out rules from the elements so you have a bit control over styles while normalize is just a set of basic rules to make the page look good, I would use both depending on the situation presented-

* Describe Floats and how they work. -floats are basically a positioning property, they will however affect other elements in the page as well-

* Describe z-index and how stacking context is formed. -it is a property that lets you stack elements on a vertical manner which will overlap things. Z-index can only affect elements that have a posistion property though-

* Describe BFC (Block Formatting Context) and how it works. -A Css rendering method that wraps around your element like a mini layout-

* What are the various clearing techniques and which is appropriate for what context? -empty div, clearfix, and overflow method-

* How would you approach fixing browser-specific styling issues? -first I would like to look at console and see what kind of styles are declared on that element and work my way through in the server, might have to google certain things-

* How do you serve your pages for feature-constrained browsers? -graceful degradtion and progressive enchancement-

  * What techniques/processes do you use? -graceful degradtion-

* What are the different ways to visually hide content (and make it available only for screen readers)? -adding the property vbisibility: hidden, position: absolute, width: 0 height: 0-\

* Have you ever used a grid system, and if so, what do you prefer? -Yes, in the past I used it a few times, usually I stick with Bootstrap's-

* Have you used or implemented media queries or mobile specific layouts/CSS? -Yes, all the web applications I made, I try to make it a priority that mobile experience is good-

* Are you familiar with styling SVG? -I used it before so I have an idea on what to do-

* Can you give an example of an `@media` property other than `screen`? -I've seen some people use print and speech-

* What are some of the "gotchas" for writing efficient CSS? -some css properties will trigger repaint or posititioning-

* What are the advantages/disadvantages of using CSS preprocessors? -Css are more maintainable, also you can reuse a lot of the code with other projects, the disadvantages are that it needs tools and could take awhile-
  * Describe what you like and dislike about the CSS preprocessors you have used. -So that I don't have to write styles in Javascript-

* How would you implement a web design comp that uses non-standard fonts? -I would use @font-face and define a font-family for different font-weight-

* Explain how a browser determines what elements match a CSS selector. -From my understanding is that browser will match the select from the rightmost to the left. The shorter the selector, the faster the browser will match the element with the right selector-

* Describe pseudo-elements and discuss what they are used for. -It is a keyword to add in a selector that lets you style a specific part of the element-

* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models. -So basically the box model will tell you how much space a block level element takes up, it will also tell you if there are any overlap things and all the dimensions in the element-

* What does ```* { box-sizing: border-box; }``` do? What are its advantages? -box-sizing: border-box changes how width and height of the elements are displayed-

* What is the CSS `display` property and can you give a few examples of its use?  -basically determines if the element is block or inline, some use case would be display:block, display: inline, display: inline-block, display: grid, display: flex-

* What's the difference between inline and inline-block? -inline does not except width and height while inline-block does, inline will behave like a block element if margin and padding are declared-

* What's the difference between the "nth-of-type()" and "nth-child()" selectors? -nth-child will select every other element a property you declared from that parent element while nth-type does it in a similar fashion but checks the type of the element instead of the parent element-

* What's the difference between a relative, fixed, absolute and statically positioned element? -relative is when the element position adjust relative to itself and does not change the layout, absolute is when the element is removed from the flow of the page so it will not affect other positition of other pages, fixed is when the element is removed but it will not move at all, static is the default position-

* What existing CSS frameworks have you used locally, or in production? How would you change/improve them? -I used bootstrap, bulma, materialize, as for changing them that I'm not sure since everyone's way of workflow is different so I feel like that's objective-

* Have you used CSS Grid? -yes-

* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy? -imo coding a web to be responsive is when you have to resize the page to a different solution as there are different monitor sizes in the tech world. So a lot of the times I had coded a page but it would turn out very different in a different PC or monitor. Mobile-first strat means that you are set out to make the mobile-end experience as smooth as possible. That also means that when put on a mobile device, the page would also be nicely designed and maintained-

* Have you ever worked with retina graphics? If so, when and what techniques did you use? -Very few times, I do believe the times I used it was when I had to test the screen of an Iphone 12 so using @media with webkit pixel ratio-

* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why? -translate is a value of transform so it does not trigger browser reflow. Using translate() will still take up the original element. The main idea is that translate is more efficient and will result in shorter paint times for smoother animations-

* How is clearfix css property useful? -makes wrapping an element that didn't fit much easier-

* Can you explain the difference between px, em and rem as they relate to font sizing? -px is the most widely used for typography but it does not scale. Em is flexible as 1em = to 16px. Em is more used towards heading, text, and paragraphs. rem is relative to the root element but sometimes run into the problem of too big or too small. rem usually are paired up with %-

* Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class? -the basic pseudo class is selector:pseudo-class {property: value}, an example case is like when you want a button to light a different color when hovered-

* What is the difference between a block level element and an inline element. Can you provide examples of each type of element? -Block level element always starts on new line and will always take up the full width. Inline element does not have a top or bottom margin. Some ex of block would be <p>, <form>, <nav>, <ul>. Some inline are <a>, <span>, <button>, <br>-

* What is the difference between CSS Grid and Flexbox? When would you use one over the other? -CSS Grid can be used to create 2 dimensional layouts while flexbox can't. Usually if you have a page with a lot rows and columns, css grid would be a better choice. Flexbox focus on how the content flows on the page. Each width of an item will be determined by the item's element-