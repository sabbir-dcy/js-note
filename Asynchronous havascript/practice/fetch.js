fetch('https://jsonplaceholder.typicode.com/posts').then(async (res) => {
  console.log(await res.json())
})

// anonymouse function promise return kore..res.json() = promise
// .then((data) => console.log(data))

// async function show(data) {
//   console.log(await data)
// }

// function num() {
//   console.log(2)
// }

// num()
