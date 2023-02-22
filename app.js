function getrandomnumber(){
return Math.floor(Math.random() * 10 + 1)
}

let randomnumber = getrandomnumber()
let resetdisplay = document.querySelector('.reset')
let guess = document.getElementById('guessinput')
let guesses = 3;
let numguess = 0;
let result = document.querySelector('.result')
let submitbtn = document.getElementById('submitbtn')
let tries = document.getElementById('tries')
let resetbtn = document.getElementById('resetbtn')



submitbtn.onclick = function(){

    numguess ++
    guesses --

        if(guess.value < randomnumber){
            if(guesses < 0){
            resetdisplay.style.display = 'block'
                return
            }
            result.innerHTML = 'too low'
        }
        else if(guess.value > randomnumber){
            if(guesses < 0){
                resetdisplay.style.display = 'block'
                    return
                }
            result.innerHTML = 'too high'
        }
        else{
            guesses = 0
            submitbtn.disabled = true
            result.innerHTML = `correct guess. it took you ${numguess} guesses`
            resetdisplay.style.display = 'block'
        }
        tries.innerHTML = guesses
    }

resetbtn.onclick = function (){
    submitbtn.disabled = false
    resetdisplay.style.display = 'none'
    randomnumber = getrandomnumber()
    guesses = 3
    numguess = 0
    result.innerHTML = ''
    tries.innerHTML = ''
    guess.value = ''
}