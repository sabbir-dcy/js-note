const paymentSuccess = true

const marks = 90
function enroll(callback) {
  console.log('course enrollment is in progress')
  setTimeout(function () {
    if (paymentSuccess) {
      callback()
    } else {
      console.log('payment failed')
    }
  }, 2000)
}

function progress(callback) {
  console.log('course on progress....')

  setTimeout(function () {
    if (marks >= 80) {
      callback()
    } else {
      console.log('marks not enough')
    }
  }, 3000)
}

function getCertificate() {
  console.log('preparing certificate')

  setTimeout(() => {
    console.log('congrats...')
  }, 1000);
}

enroll(() => progress(getCertificate))
