// // Arrow function vs Normal function
//
// var names = ['Talon', 'Lauren', 'Cohen'];
//
// // Normal Function
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
//
// // Arrow function with statement body to add multiple lines
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('whatever');
// });
//
// // Arrow function if you only want to do 1 thing
// names.forEach((name) => console.log(name));
//
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Talon'));
//
//

// var person = {
//   name: 'Talon',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name) //arrow function does not update the this keyqord.
//     });
//   }
// };
//
// person.greet();


//Challenge Area

// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
// console.log(add(9, 0));
//
// //addStatement
// var addStatement = (a, b) => {
//   return a + b;
// }
//
// console.log(addStatement(4, 3));
// console.log(addStatement(15, 3));
//
// //addExpression
// var addExpression = (a, b) => a + b;
//
// console.log(addExpression(3, -2));
