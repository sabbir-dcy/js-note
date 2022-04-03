const disp = document.querySelector('#display')
const res = document.querySelector('#result')
const inp = document.querySelector('#input-field')

function func() {
  disp.innerHTML = this.value
  const self = this
  setTimeout(function () {
    res.innerHTML = `you have types: ${self.value}`
  })
}

/**
 * *-this- is window...o/p undefined
 * inp.addEventListener('keyup', () => {
  console.log(this);
  disp.innerHTML = this.value
}) */

/**
 * *solution- either use normal function or event.target
 */

inp.addEventListener('keyup', (e) => {
  disp.innerHTML = e.target.value
})
