const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })

    document.body.innerHTML = output
  }, 1000)
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post)
  }, 2000);
}

newPost = {title:'post3', body:'this is post 3'}
console.log(posts)
createPost(newPost)
getPosts()



















