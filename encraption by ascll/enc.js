let word = document.getElementById("word")
let key = document.getElementById("key")
let btnInc = document.getElementById("enc")
let result = document.getElementById("result")
let btnDec = document.getElementById("dec")
let sum = ""

btnInc.addEventListener("click" , function() {
    for(let i = 0; i < word.value.length; i++){
        let result = word.value[i].charCodeAt(0)
        result = result + +key.value
        char = String.fromCharCode(result);
        sum = sum + char 
    }
    let element = document.createElement("p")
    let textElement = document.createTextNode(sum)
    element.classList.add("list")
    let spanElement = document.createElement("span")
    let type = document.createTextNode("enc : ")
    spanElement.appendChild(type)
    element.appendChild(spanElement)
    result.appendChild(element)
    element.appendChild(textElement)
    console.log(sum)
    // here to do reset to sum
    sum = ""
})

btnDec.addEventListener("click" , function() {
    for(let i = 0; i < word.value.length; i++){
        let result = word.value[i].charCodeAt(0)
        result = result - +key.value
        char = String.fromCharCode(result);
        sum = sum + char 
    }
    let element = document.createElement("p")
    let textElement = document.createTextNode(sum)
    element.classList.add("list")
    let spanElement = document.createElement("span")
    let type = document.createTextNode("dec : ")
    spanElement.appendChild(type)
    element.appendChild(spanElement)
    result.appendChild(element)
    element.appendChild(textElement)
    console.log(sum)
    // here to do reset to sum
    sum = ""
})









// let x = "a"
// let result = x.charCodeAt(0)
// console.log(result)