

let validNameRegex = /^[A-Za-z]+$/
let validAgeRegex = /^[0-9]+$/


function validation(event){

    event.preventDefault()

    let name = document.getElementById('nameInput').value
    let age = document.getElementById('ageInput').value

    if(name.match(validNameRegex) && age.match(validAgeRegex)){
        document.getElementById('nameError').style.visibility = 'hidden'
        document.getElementById('ageError').style.visibility = 'hidden'
        document.getElementById('ageInput').style.border = 'solid 1.5px green'
        document.getElementById('nameInput').style.border = 'solid 1.5px green'
        return true
    } else if ((!name.match(validNameRegex)) && (!age.match(validAgeRegex))){
        document.getElementById('nameError').style.visibility = 'visible'
        document.getElementById('ageError').style.visibility = 'visible'
        document.getElementById('nameInput').style.border = 'solid 1.5px red'
        document.getElementById('ageInput').style.border = 'solid 1.5px red'
        return false
    } else if((!name.match(validNameRegex)) && age.match(validAgeRegex)){
        document.getElementById('nameError').style.visibility = 'visible'
        document.getElementById('nameInput').style.border = 'solid 1.5px red'
        document.getElementById('ageError').style.visibility = 'hidden'
        document.getElementById('ageInput').style.border = 'solid 1.5px green'
        return false
    } else if(name.match(validNameRegex) && (!age.match(validAgeRegex))){
        document.getElementById('ageError').style.visibility = 'visible'
        document.getElementById('ageInput').style.border = 'solid 1.5px red'
        document.getElementById('nameInput').style.border = 'solid 1.5px green'
        document.getElementById('nameError').style.visibility = 'hidden'
        return false
    }
}


let form = document.getElementById('myForm')
form.addEventListener('submit', validation)