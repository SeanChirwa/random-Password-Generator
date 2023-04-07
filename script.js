const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("firstPassword");
let secondPass = document.getElementById("secondPassword");
let Password = "";
let Password2 ="";


for (let i = 0 ; i < 15 ; i++){
    randomCharacters();
}

for (let j = 0 ; j < 15 ; j++){
    randomCharacters2();
}
// function clearArea(){
//     firstPass.value =10
//     secondPass.value = 10
// }
function generatePassword(){
    // clearArea()
    firstPass.value = Password
    secondPass.value = Password2
}


function randomCharacters(){
    let index =Math.floor(Math.random()*characters.length);
    return Password += characters[index]
}

function randomCharacters2(){
    let num =Math.floor(Math.random()*characters.length);
    return Password2 += characters[num]
}
console.log(Password)

// firstPass.textContent = Password
// secondPass.textContent = Password2
 