// // Asynchronus callbacks vs Promises
//
// // Asynchronus Callback
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Utah', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// // Promise
// // can only be returned once even though it is calling resolve and the reject.
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Utah').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err);
// });


// Challenge - return promise and then add up a and b
function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

// Successful test example
addPromise(2, 3).then(function (sum){
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

// Failing test example
addPromise('talon', 3).then(function (sum){
  console.log('this should not show up');
}, function (err) {
  console.log('This should appear', err);
});
