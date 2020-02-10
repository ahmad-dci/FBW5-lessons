let x = "Hello World"
let len = x.length
console.log(len)

let idx = x.indexOf("l", 4)
console.log(idx)

let lidx = x.lastIndexOf("l")
console.log(lidx)

console.log("/////////////////////")

indexesFinder("Hakona Matata", "k", 0)

function indexesFinder(txt, chr, start) {
    if(start < txt.length){
        let idx = txt.indexOf(chr, start)
        if(idx != -1){
            console.log(idx)
            indexesFinder(txt, chr, idx+1)
        }
    }
}


