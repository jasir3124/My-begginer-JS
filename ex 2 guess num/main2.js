let guesInput = document.getElementById('guesNum')
let guesBtn = document.getElementById('guesBtn')





guesBtn.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random()*11)
    if((+guesInput.value) == randomNum){
        alert('you guessed right')
    } else {
        alert('you guessed wron the number was ' + randomNum)
    }
})

console.log(randomNum)