
let num1 = document.getElementById('nr1')
let num2 = document.getElementById('nr2')
let ansBtn = document.getElementById('ans')
let h1 = document.getElementById('ansHere')
let op = document.getElementById('op')

ansBtn.addEventListener('click', function(){
    if(op.value == 'mledhje'){
        h1.innerText = + (+num1.value) + (+num2.value)
    } else if(op.value == 'zbritje'){
        h1.innerText = + (+num1.value) - (+num2.value)
    } else if(op.value == 'pjestim'){
        h1.innerText = + (+num1.value) / (+num2.value)
    } else if(op.value == 'shumzim'){
        h1.innerText = + (+num1.value) * (+num2.value)
    }

    num1.value = ''
    num2.value = ''
})