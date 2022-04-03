const gotMaterial = true
const permitted = true
const checkout = !true

function processRawMaterial() {
  console.log('waiting for raw material')
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (gotMaterial) {
        resolve('just got raw material')
      } else {
        reject('did not get material :(')
      }
    }, 3000)
  })
  return promise
}

function startBuilding() {
  console.log('building on progress')
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (permitted) {
        resolve('started building')
      } else {
        reject('did not get the permission :(')
      }
    }, 2000)
  })
  return promise
}

function packaging() {
  console.log('packaging product')
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (checkout) {
        resolve('ready to ship')
      } else {
        reject('not ready to ship :(')
      }
    }, 500)
  })
  return promise
}

function shipProduct() {
  const promise = Promise.resolve('product on the way.....')
  return promise
}

processRawMaterial()
  .then(function (value) {
    console.log(value)
  })
  .then(startBuilding)
  .then(function (value) {
    console.log(value)
  })
  .then(packaging)
  .then(function (value) {
    console.log(value)
  })
  .then(shipProduct)
  .then(function (value) {
    console.log(value)
  })
  .catch(function (err) {
    console.log(err)
  })
