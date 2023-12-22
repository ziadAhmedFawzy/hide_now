let word = document.getElementById("word")
let btnInc = document.getElementById("enc")
let result = document.getElementById("result")
let clear = document.getElementById("clear")

let topLine = ""
let bottomLine = ""

let count = 0

let count2 = 1

btnInc.addEventListener("click" , function() {
    while(count < word.value.length) {
        topLine = topLine + word.value[count]
        count = count + 2
    }
    while(count2 < word.value.length) {
        bottomLine = bottomLine + word.value[count2]
        count2 = count2 + 2
    }

    let element = document.createElement("p")
    let Break = document.createElement("br")
    let createTextTop = document.createTextNode(topLine)
    let createTextBottom = document.createTextNode(bottomLine)
    element.appendChild(createTextTop)
    element.appendChild(Break)
    element.appendChild(createTextBottom)
    result.appendChild(element)
    element.classList.add("list")
    count = 0
    count2 = 1
    topLine = ""
    bottomLine = ""
})

clear.addEventListener("click" , function() {
    result.innerHTML = ""
})