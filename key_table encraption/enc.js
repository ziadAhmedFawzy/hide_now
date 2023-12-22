let btn = document.getElementById("enc")
let word = document.getElementById("word")
let key = document.getElementById("key")
let result = document.getElementById("result")
let clear = document.getElementById("clear")

count = 0
x = 0

// Assuming you have a loop where i is the starting index
btn.addEventListener("click" , function() {
    for (var i = 0; i < word.value.length - +key.value; i++) {
        var substring = word.value.slice(x, x + +key.value);
        x = x + +key.value
        let box = document.createElement("div")
        let textElement = document.createTextNode(substring)
        box.appendChild(textElement)
        result.appendChild(box)
        box.classList.add("table")
    }
    let line = document.createElement("hr")
    result.appendChild(line)
    count = 0
    x = 0
})

clear.addEventListener("click" , function() {
    result.innerHTML = ""
})