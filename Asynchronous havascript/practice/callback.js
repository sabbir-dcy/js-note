/* function calc(a, b, callback) {
  if (callback) callback(a + b)
}

calc(5, 4, (output) => {
  console.log(output)
}) */

const gotMaterial = true
const permitted = true
const checkout = true

function processRawMaterial(callbackBuild) {
  console.log('waiting for raw material')
  setTimeout(() => {
    if (gotMaterial) {
      console.log('just got raw material')
      callbackBuild()
    } else {
      console.log('did not got the delivery')
    }
  }, 3000)
}

function startBuilding(callBackPackaging) {
  console.log('waiting for to start building')
  setTimeout(() => {
    if (permitted) {
      console.log('just started building')
      callBackPackaging()
    } else {
      console.log('cant build..did not get the permission')
    }
  }, 2000)
}

function packaging(callBackShip) {
  console.log('packaging product')
  setTimeout(() => {
    if (checkout) {
      console.log('ready to ship')
      callBackShip()
    } else {
      console.log('not ready to ship')
    }
  }, 500)
}

function shipProduct() {
  console.log('product on the way')
}

processRawMaterial(function () {
  startBuilding(function () {
    packaging(shipProduct)
  })
})

// call back hell
/* processRawMaterial(function () {
  startBuilding(function () {
    packaging(shipProduct(function () {
      a(shipProduct(function () {
        b(shipProduct(function () {
          c(shipProduct(function () {
            d(shipProduct(function () {
              e(shipProduct)
            }))
          }))
        }))
      }))
    }))
  })
}) */
