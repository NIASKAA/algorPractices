---
title: Performance Questions
layout: layouts/page.njk
permalink: /questions/performance-questions/index.html
---

* What tools would you use to find a performance bug in your code? -usually my console debugger would do the job as that is my main way of reading and understanding the problem-

* What are some ways you may improve your website's scrolling performance? -I wouldn't use scrolljacking and depending the application I'm building, I would not use a fixed background (parallax), and keep the more fancier styles to a minimum-

* Explain the difference between layout, painting and compositing. -layout is recursive so it will render at the root, painting is converting the DOM and CSS property to pixels on the screen,
composing is when the browser lay things out in an order according to z-index stacks-