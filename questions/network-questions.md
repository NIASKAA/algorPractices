---
title: Network Questions
layout: layouts/page.njk
permalink: /questions/network-questions/index.html
---

* Traditionally, why has it been better to serve site assets from multiple domains? -Browsers might have limits on download from a domain so having assets from mulitple domain would help solve that issue-

* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen. -When I enter a website's URL, in the transport layer, it will ask a local DNS what is the IP of the provided URL. We know the IP of the local DNS server by the DHCP protocol, when a node connects to internet and gets an IP address.

After that, a browser will try to establish a TCP connection with a server having the retrieved IP by 3-way handshake. When it establish a TCP connection, the browser will form an HTTP request containing an HTTP header and body.

After the HTTP request is sent and the server responds with an HTTP response, the browser will parse the HTTP response header and body, and will render the website. If the document contains additional assets, the browser will create HTTP requests for the assets and send them like above-

* What are the differences between Long-Polling, Websockets and Server-Sent Events? -Long polling is when http request stays open until something comes back. Server-sent is when the request is continuous, websockets are bi-directional between the server and client-

* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
  -Expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache.

  Date: The date and time that the message was sent

  The Age response-header field conveys the sender's estimate of the amount of time since the response (or its revalidation) was generated at the origin server.

  The If-Modified-Since request-header field is used with a method to make it conditional: if the requested variant has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.

  Do Not Track: disable either its tracking or cross-site user tracking

  Cache-Control: Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds

  Transfer-Encoding: The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.

  ETag: An identifier for a specific version of a resource
  
  X-Frame-Options can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe> or <object>-

* What are HTTP methods? List all HTTP methods that you know, and explain them. -GET: The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

HEAD: Same as GET, but transfers the status line and header section only.

POST: A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

PUT: Replaces all current representations of the target resource with the uploaded content.

DELETE: Removes all current representations of the target resource given by a URI.

CONNECT: Establishes a tunnel to the server identified by a given URI.

OPTIONS: Describes the communication options for the target resource.

TRACE: Performs a message loop-back test along the path to the target resource.-

* What is domain pre-fetching and how does it help with performance? -It is an attempt to get the domain name before resources are requested, it helps with latency-

* What is a CDN and what is the benefit of using one? -CDN is a network of data and pproxy servers that are all over the place. They provide clients the resources to whoever that is closer so it helps reduce latency-
