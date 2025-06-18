// function test(){
//     console.log(this);
//     this.myName = "Javascript";
//     console.log(this.myName)
// }
// test();
// // console.log(window.myName)

// Function constructors
function Circle (radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// // Circle.prototype.getArea = 
// //   function () {
// //     return Math.PI * Math.pow(this.radius, 2);
// //   };

var myCircle = new Circle(10);
console.log(myCircle.radius);
console.log(myCircle.getArea())

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



