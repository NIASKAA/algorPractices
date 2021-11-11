---
title: HTML Questions
layout: layouts/page.njk
permalink: /questions/html-questions/index.html
---

* What does a `doctype` do? -it tells what versions of HTML the page will be using-

* How do you serve a page with content in multiple languages? -<html lang="en"> and using span lang-
* What kind of things must you be wary of when designing or developing for multilingual sites? -imo the layout is important so nothing breaks when a text content is, colors, formatting the dates because different countries uses different format-

* What are `data-` attributes good for? -good for storing extra information on standard semantic HTML elements, also can store custom private data to the page, embeding data-

* Consider HTML5 as an open web platform. What are the building blocks of HTML5? -semantic that allows you to describe what your content is, connectivity that allows you to call the server, storage that stores data on the client side locally and also works in offline, better video and audio, graphics that is more presentatable, better performance speeds, various amount of device compactbility, better themes-

* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`. -Session storage is only available when you are using the page, local storage will still exist when you close the page. It should only be storing non-sensitive data though, cookies are a different kind of storage as it stores user data, not sensitive data as well. This type of storage will still exist when the page is close but in form of basic text-

* Describe the difference between `<script>`, `<script async>` and `<script defer>`. -`<script>` is used to declare a client-side script, `<script async>` is when a script will run even when the page is still parsing  and `<script defer>` is when the page will only run a script when HTML is parsed fully-

* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

* What is progressive rendering? -the way of rendering portions of a page and make it presentable to the client without waiting for the whole page to load-

* Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute. -srcset basically lets you declare a list of image sizes so the browser set the resolution suitable, it does the process by first detechiong the client's resolution and it will then be able to display the right .jpg-

* Have you used different HTML templating languages before? -Yes, used handlebars and react-

* What is the difference between `canvas` and `svg`? -canvas you have to set a script for it to draw the graphics while svg is drawn out by just statements. SVG will not lose any image quality when scaled up or down. SVG are based off shapes as canvas are pixels, svg can also be changed through script or css, canvas are single elements-

* What are empty elements in HTML? -they are element that can not have any child nodes. you can also tell by how it does not have a closing tag. (Ex: <hr>)-

