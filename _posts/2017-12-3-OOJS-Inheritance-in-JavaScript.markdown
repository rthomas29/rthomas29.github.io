---
layout: post
comments: true
title: "OOJS: Inheritance in JavaScript"
image: /assets/images/Rakeem.jpg
headerImage: false
date: 2017-12-03
category: blog

---

Although you can build software using an object-oriented style with JavaScript, there are some core differences between the inheritance model in JavaScript versus OOP-specific languages, e.g., Java, C#. To share functionality between objects, traditional OOP languages utilize *classical inheritance* as their inheritance model, while JavaScript uses *prototype-based inheritance*.

Classical Inheritance revolves around using classes as a blueprint to create new objects. In other words, classes are a template that describe what values and functionality is available within objects that are instantiated from a class. To create an object in a classical OOP language, you *must* instantiate a class! For example, if you have a Car class and wanted to create a new object that encapsulates information about your car, you would need to instantiate the Car class.

```Java
class Car {
  // properties and methods go here
}

// myCar is an instance of Car class.
var myCar = new Car();
```

Prototype-based inheritance allows you more flexibility by enabling you to instantiate new objects based on other objects. There is no concept of a class (at least in a traditional sense). Instead of a class, *constructor functions* are used to create new objects with specified values and functionality.

```javascript
const Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car ('Honda', 'Civic', 2016);
console.log(myCar.make) // 'Honda'
console.log(myCar.year) // 2016
```
By convention, constructor functions are given an uppercase name. However, a constructor will serve its purpose, even if it isn't capitalized.

Now, let's talk about what makes JavaScript special.

## The Prototype Chain