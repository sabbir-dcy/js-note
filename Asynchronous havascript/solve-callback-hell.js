const paymentSuccess = true
const marks = 90

function enroll() {
  console.log('course enrollement in progress')

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve()
      } else {
        reject('could not complete the payment')
      }
    }, 1000)
  })

  return promise
}

function progress() {
  console.log('course in progress')

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve()
      } else {
        reject('marks not enough')
      }
    }, 3000)
  })

  return promise
}
function getCertificate() {
  console.log('preparing your certificate')

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('congrats')
    }, 1000)
  })

  return promise
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function(value){
    console.log(value)
  })
  .catch(function (err) { // common catch
    console.log(err)
  })
