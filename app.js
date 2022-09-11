let playerOne = document.getElementById('player1')
let playerTwo = document.getElementById('player2')
const gameLavel = document.getElementById('gameLavel')
const btnPlayerOne = document.getElementById('btnPlayer1')
const btnPlayerTwo = document.getElementById('btnPlayer2')
const resetBtn = document.getElementById('reset')

function playFuncOne() {
    if (playerOne.textContent < +gameLavel.value && playerTwo.textContent < +gameLavel.value) {
        playerOne.textContent++
    }
    if (playerOne.textContent == +gameLavel.value && playerTwo.textContent < +gameLavel.value) {
        playerOne.classList.remove('loser')
        playerTwo.classList.remove('winner')
        playerOne.classList.add('winner')
        playerTwo.classList.add('loser')
    }
}
function playFuncTwo() {
    if (playerTwo.textContent < +gameLavel.value && playerOne.textContent < +gameLavel.value) {
        playerTwo.textContent++
    }
    if (playerTwo.textContent == +gameLavel.value && playerOne.textContent < +gameLavel.value) {
        playerTwo.classList.remove('loser')
        playerOne.classList.remove('loser')
        playerTwo.classList.add('winner')
        playerOne.classList.add('loser')
    }

}
function reset() {
    playerOne.textContent = 0
    playerTwo.textContent = 0
    playerOne.classList.remove('winner', 'loser')
    playerTwo.classList.remove('winner', 'loser')
}
    
btnPlayer1.addEventListener('click', (e) => {
    playFuncOne()
})
btnPlayer2.addEventListener('click', (e) => {
    playFuncTwo()
})
resetBtn.addEventListener('click', (e) => {
    reset()
})
gameLavel.addEventListener('click', (e) => {
    reset()
})

const a =  10
const b = 6
console.log(a+b)