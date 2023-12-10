let btn = document.getElementById("enc")
let word = document.getElementById("word")
let key = document.getElementById("key")
let result = document.getElementById("result")

count = 0
x = 0

// Assuming you have a loop where i is the starting index
btn.addEventListener("click" , function() {
    for (var i = 0; i < word.value.length - +key.value; i++) {
        var substring = word.value.slice(x, x + +key.value);
        x = x + +key.value
        let box = document.createElement("div")
        let table = document.createElement("table")
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")
        let textElement = document.createTextNode(substring)
        box.appendChild(table)
        table.appendChild(tbody)
        table.setAttribute("border" , 1)
        tbody.appendChild(tr)
        tr.appendChild(textElement)
        result.appendChild(box)
        table.classList.add("table")
    }
    count = 0
    x = 0
})