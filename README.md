# Get Class Statics
Get the ES6-like class statics.
 
 Example:
 
 ```js
 import getClassStatics from 'get-class-statics';
 
 class Foo {
  static bar() {
    // bar method
  }
 }
 
 var fooStaticMethods = getClassStatics(Foo); // return { bar: [Function: bar] }
 ```
