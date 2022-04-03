/* function display(some) {
  console.log(some)
}

function calculator(num1, num2, callback) {
  let sum = num1 + num2
  if (callback) callback(sum)
  return sum
}

let result = calculator(5, 5)
display(result)


let result = calculator(5, 5, display) */

/* function calculator(num1, num2, callback) {
  let sum = num1 + num2
  if (callback) callback(sum)
  return sum
}

let result = calculator(5, 5, (sum) => {
  console.log(sum)
}) */

console.log('line 1 code')
setTimeout(function(){  // settime out anynchronous function
  console.log('line 2 code')
}, 2000)
console.log('line 3 code')