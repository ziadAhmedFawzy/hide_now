let word = document.getElementById("word");
let keys = document.getElementById("keys");
let enc = document.getElementById("enc");
let dec = document.getElementById("dec");
let clear = document.getElementById("clear");

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

enc.addEventListener("click", function() {
    let num = 0
    let result = "";
    for(let i = 0; i < word.value.length; i++)
    {
        num = +keysList(word.value, keys.value)[i] + word.value[i].charCodeAt(0)
        result = result + String.fromCharCode(num)
    }
    
})
