let word = document.getElementById("word");
let keys = document.getElementById("keys");
let enc = document.getElementById("enc");
let dec = document.getElementById("dec");
let clear = document.getElementById("clear");
let resultPlace = document.getElementById("resultPlace")

// this is function to repeat key with length txt
function keysList(txt,repeat) {
    sum = 0;
    for(let i = 0; i < txt.length; i++)
    {   
        for(let x = 0; x < repeat.length; x++)
        {
            if(repeat[x] == undefined)
            {
                continue;
            }
            sum = sum + repeat[x]
        }
    }
    return sum.slice(1, txt.length + 1)
}

// encrypt
enc.addEventListener("click", function() {
    let num = 0
    let result = "";
    for(let i = 0; i < word.value.length; i++)
    {
        num = +keysList(word.value, keys.value)[i] + word.value[i].toUpperCase().charCodeAt(0)
        result = result + String.fromCharCode(num)
    }
    // add element
    let pargraph = document.createElement("p")
    let pargraphTxt = document.createTextNode(result)
    let encTxt = document.createTextNode("enc : ")
    pargraph.appendChild(encTxt)
    pargraph.appendChild(pargraphTxt)
    resultPlace.appendChild(pargraph)
})

// decrypt
dec.addEventListener("click", function() {
    let num = 0
    let result = "";
    for(let i = 0; i < word.value.length; i++)
    {
        num = word.value[i].toUpperCase().charCodeAt(0) - +keysList(word.value, keys.value)[i] 
        result = result + String.fromCharCode(num)
    }
    // add element
    let pargraph = document.createElement("p")
    let pargraphTxt = document.createTextNode(result)
    let decTxt = document.createTextNode("dec : ")
    pargraph.appendChild(decTxt)
    pargraph.appendChild(pargraphTxt)
    resultPlace.appendChild(pargraph)
})

// clear
clear.addEventListener("click" , function() {
    resultPlace.innerHTML = ""
})