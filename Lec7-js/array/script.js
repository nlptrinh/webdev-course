// Arrays
// var array = new Array();
// array[0] = 'Ginger';
// array[1] = 2;
// array[2] = function (name){
//     console.log("Hello " + name)
// }
// array[3] = {course: "HTML, CSS & JS"}

// // console.log(array[3].course)
// array[2](array[0]);

// var names = ["Alex", "Brandon", "Charles"];
// // console.log(names);

// // for (var i = 0; i < names.length; i++){
// //     console.log("Hello " + names[i]);
// // }
// names[100] = "Zuck";


// for (var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }


// var names = ["Alex", "Brandon", "Charles"];

// var myObj = {
//     name: "Alex",
//     course: "HTML"
// };
// console.log(myObj)
// for (var prop in myObj){
//     console.log(prop + ": " + myObj[prop]);
// }
// for (var name in names) {
//     console.log("Hello " + names[name]);
// }

var names = ["Alex", "Brandon", "Charles"];
names.greeting = "Hello!";

for(var name in names){
    console.log("Hello " + names[name]);
}

console.log(names)