# Binding

- ## [Implicit](#example)
- ## [Explicit](#explicit-binding)

## Implicit binding :

### Example 01

```javascript
var sakib = {
  name: 'sakib',
  age: 35,
  printPlyerName: function () {
    console.log(this.name)
  },
}

sakib.printPlyerName()
```

> sakib

### Example 02

```javascript
var printPlyerNameFunction = function (obj) {
  obj.printPlyerName = function () {
    console.log(this.name)
  }
  obj.job = 'cricket'
}

var sakib = {
  name: 'sakib',
  age: 35,
}

var tamim = {
  name: 'tamim',
  age: 35,
}

printPlyerNameFunction(sakib)
printPlyerNameFunction(tamim)

sakib.printPlyerName()
tamim.printPlyerName()

console.log(sakib.job)
```
ekhane <mark style="background: lightblue">printPlayerNameFunction</mark> parameter a ekta object nibe. er por `obj.printPlyerName` that means oi object e ekta new key create hobe jar nam `printPlaterName` and value hobe ekta function. for example amra `sakib` object pass kori. sakib object er key holo `printPlayerNameFunction`. ekhon amra (.) notation use kore ei key ta access korte pari.
## explicit binding :
