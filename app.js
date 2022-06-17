//   function vowels(string) {
//     if(typeof string !== "string"){
//         alert("string ifade giriniz:")
//     }
//     let sesliHarf = string.match(/[aeiou]/gi);
//     if(sesliHarf) {
//         return sesliHarf.length;
//     }
//     return 0
//   }
//   let input = prompt("bişiler:");
//   console.log(`${input}'nin sesli harf sayisi:`, vowels(input));



let input = document.querySelector("#input");
let button = document.querySelector("#button");
let text = document.querySelector("#text");

button.addEventListener("click", () => {
    if(!input.value){
        alert("Bir şey yaziniz")
    }
    
    let vowels;
    if(input.value.match(/[aeiou]/gi)) {
        vowels = input.value.match(/[aeiou]/gi).length;
    } else {
        vowels = 0
    }

    if(vowels === 0){
        text.innerHTML = `There isn't vowel in ${input.value}`;
        input.value = ""
    } else {
        text.innerHTML = `There are ${vowels} vowel in ${input.value}`;
        input.value = ""
    };
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        button.click();
    }
});