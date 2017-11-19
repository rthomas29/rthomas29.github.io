---
layout: post
comments: true
title: "OOJS: Object Creation"
image: /assets/images/Rakeem.jpg
headerImage: false
date: 2017-11-19
category: blog

---

Object Oriented Programming (OOP) is a common way for engineers to organize their code and allows for the encapsulation of related code and functionality. JavaScript is a multi-paradigm language that allows for multiple ways to create software, and the OO approach is popular among JavaScript engineers. One main difference between OO JavaScript and strictly-typed OO languages e.g. Java and C#, is that JavaScript is **prototype-based** instead of **class-based**. In other words, objects inherit from other objects using the **prototype chain** instead of inheriting members from a class. We'll talk more about this in my next post. In this post, we'll focus on the basics of creating objects in JavaScript.

An object literal is the most straightforward way to create a new JavaScript object. If you are unfamiliar with objects, they are blocks of code that allow engineers to store behavior and functionality that is closely related. As the name implies, all properties and methods are manually added to the object at the time of declaration.

```javascript
const myCar = {
  make: 'Honda',
  model: 'Civic',
  color: 'blue',
  logCarInfo: function () {
    return `I own a ${this.color} ${this.make} ${this.model}`;
  },
}
```
I've manually added properties to describe my car (make, model, color) and added a method that returns a string with a description of my car (logCarInfo). This is a contrived example, but know that you can add properties of all types that exist in JavaScript. This means that you can have properties of type boolean, number, function, string, or even nested objects! For example, you can have a nested object that provides more details about your car:

 ```javascript
const myCar = {
  make: 'Honda',
  model: 'Civic',
  color: 'blue',
  details: {
    VIN: '1FAHP2F87EG104822',
    mileage: 57000,
    transmission: 'manual',
    is4WD: false,
  },
  logCarInfo: function () {
    return `I own a ${this.color} ${this.make} ${this.model}`;
  },
}
```
This is a direct benefit of JavaScript being a weakly-typed language. We can add properties to our object, and the JavaScript interpreter will assign a type to the property based on the value that is assigned to the property. For instance, if you executed `typeof myCar.make`, `string` will be returned. If you executed `typeof myCar.details` 'object' will be returned.

We can also create new objects in JavaScript by utilizing the `new` operator. Instead of populating an object literal with pre-defined properties, we instantiate a new object based on a **constructor** that we specify and use dot notation to add new properties and methods, like so:

```javascript
  const myCar = new Object();
  myCar.make = 'Honda';
  myCar.model = 'Civic';
```
In my next post, I'll dig deeper into utilizing the new operator and instantiating objects based on constructor functions.



