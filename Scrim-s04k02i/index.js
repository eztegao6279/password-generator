const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//Fetch the content area from the html
let pswEl1 = document.getElementById("psw-el-1")
let pswEl2 = document.getElementById("psw-el-2")



//main function for generating the random passwords
function randomPsw(){
//declare a respective strings to use as storage for the passwords
let psw1 = ""
let psw2 = ""
//for-loop that loops through characters[] for a length of 15 times
for(let i = 0; i<15; i++){
    //choose random index positions in the characters[] for the two passwords
    let randomIndex1 = Math.floor(Math.random()*characters.length)
    let randomIndex2 = Math.floor(Math.random()*characters.length)

    //add the value of the random indexpositions in the respective psw storage, will do it 15 times
    psw1 += characters[randomIndex1]
    psw2 += characters[randomIndex2]
}

//add the psw strings content into the content area from the html
pswEl1.textContent = psw1
pswEl2.textContent = psw2

}

console.log(randomIndex)
