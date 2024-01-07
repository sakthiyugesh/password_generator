const input_box = document.getElementById('input')
const length= 16

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&&*()_:<>?}{+*"
const numbers = "1234567890"
const allCharcters = upperCase + lowerCase + symbols+ numbers

function generatePassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]

    while ( length > password.length){
        password += allCharcters[Math.floor(Math.random()*allCharcters.length)]

    }
    input_box.value = password

    console.log(password)


}

function Copy(){
    let n = input_box.value
    console.log(n)
    input_box.select()
    document.execCommand("copy")
   if (n === ""){
    alert("empty")
   }
   else{
    alert("text Copied to clipboard")
   }


}