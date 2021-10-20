# Asynchronous JavaScript

Welcome to the Asynchronous JavaScript folder.

## Structure

The folder consists of 15 exercises, divided in 2 series. 

### Local server

The exercises require running the code on a _local server_.  
This is a good practice that should always be applied. Maybe, you have already install [node.js](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/about-npm/) on your machines. If not, do it ;). 
If you want to configure correctly the global settings of npm [follow this article](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory).

We prepared for you a local server to use from your command line called [**sèvè**](https://github.com/leny/seve).

Then, use your terminal to *navigate* to your repo and run the following commands :

	npm install
	npm start

If everything ir right, your default's browser will be opened on the address [localhost:8000](https://localhost:8000).

### First series : Asynchronous

The first series will allow you to practice learning asynchronous.
You will learn asynchronous by following the evolution of this concept in the history of JavaScript.
From a fake post generator, you will use 3 functions (getPosts, getComments and handlingErrors) with 3 differents asynchronous methods :
* The callbacks functions : from 01 to 03
* The Promises : from 04 to 06
* The Async functions : from 07 to 09

For each function, you will have explanations about its behaviour, read it carefully. 

### Second series : Fetch

In this serie, you will use an API REST and perform some requests to it with the help of [Fetch function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 

You will use 3 kinds of query :
* GET : to retreive the data (01 to 03)
* POST : to add a data (04)
* DELETE : to delete a data (05)

#### Specific tooling

We have provided you with a small script to run this API locally.

Open a second terminal, then _navigate_ to the repo folder. Then issue the following commands :

    npm run api

From there, you will have a REST API available at `http://localhost:3000`


## Resources

To get the most out of these exercises, some useful resources:

### Reading 
- [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee)
- [Synchronous vs Asynchronous JavaScript – Call Stack, Promises, and More](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/)
- [response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
- [fetch() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [Tutorial about Fetch](https://javascript.info/fetch)

### Watching
- [Promises, Async, and Await by Tony Alicea](https://www.youtube.com/watch?v=fyGSyqEX2dw&t=3s&ab_channel=TonyAlicea)
- [Callbacks, Promises, Async Await
 by Brad Traversy](https://www.youtube.com/watch?v=PoRJizFvM7s&ab_channel=TraversyMedia) 


* * *

Good work!

![](https://media.giphy.com/media/xT9DPPqwOCoxi3ASWc/giphy.gif)
