const check = false

console.log('task1')

//promise definition
/**
 * *we created a promise
 * promise takes a function in parameter...which function by
 * default pass two function as parameter..we can call those
 * resolved and reject by convention
 * and inside the function that promise takes, we perform
 * asynchronous action. if we task is succeed we call resolve
 * other wise we call reject
 */
const promise = new Promise(function (resolved, reject) {
  setTimeout(function () {
    if (check) {
      resolved('task 2')
    } else {
      reject('failed')
    }
  }, 1000)
})

// promise call
promise
  .then(function (value) { // takes the value that resolved passes
    console.log(value)
  })
  .catch(function (error) { // takes the value that reject passes
    console.log(error)
  })

console.log('task3')
