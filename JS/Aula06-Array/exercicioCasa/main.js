var array = ["HTML", 19,"CSS",1996,"Bootstrap",2011,"JS",1995,"React",2013,"Java",1995]
console.log(array)

let todo = array.length
console.log(todo)

let retirarPosi = array[6]
console.log(retirarPosi)

let string = array.toString()
console.log(string)

let join = array.join("/")
console.log(join)

let ad = array.unshift("IOS")
console.log(ad)
console.log(array)

// console.clear()

var bidi = [
    ["HTML", 1993,"CSS", 1966],
    ["Bootstrap", 2011,"JS", 1995],
    ["React", 2013,"Java", 1995]
]
console.log(bidi)

console.log(bidi.length)

let ano = bidi[2][1]
console.log(ano)

console.log("Antes" + bidi);
bidi[1][2] = 'Javascript'
console.log("Depois:" + bidi)

delete bidi[2][2]
console.log(bidi)

let final = bidi.push("pipoca")
console.log(final)