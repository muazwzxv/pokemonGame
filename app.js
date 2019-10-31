const game = () => {
    let pScore = 0
    let cSCore = 0

    // function to start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    //Function to play the match
    const playMatch = () => {
        const options = document.querySelectorAll('.option button')
        const player = document.querySelector('.player-pokemon')
        const comp = document.querySelector('.computer-pokemon')

        const pokemons = document.querySelectorAll('.pokemons img')

        pokemons.forEach(pokemon => {
            pokemon.addEventListener('animationed', function(){
                this.style.animation = ''
            })
        })

        //computer selections - randomize
        // Randomize is solve by randomly a certain number and the number is associated with the options 
        const compOptions = ['fire', 'water', 'plant']

        options.forEach((option) => {
            option.addEventListener('click', () => {
                //Comp choices
                const compNumber = Math.floor(Math.random() * 3)
                const compChoose = compOptions[compNumber]

                //Check comparison function
                whoWins(option.textContent, compChoose)
                // update images
                player.src = `./assets/${option.textContent}.png`
                comp.src = `./assets/${compChoose}.png`

                //Animations
                //player.style.animation = 'shakePlayer 2s ease'
                //comp.style.animation = 'shakeComputer 2s ease'
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const compScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        compScore.textContent = cSCore
    }

    const whoWins = (playerChoice, compChoice) => {
        // update text
        const winner = document.querySelector('.winner')
        //check for a tie
        if (playerChoice === compChoice) {
            winner.textContent = 'It is a tie bruhhh'
            return
        }

        // check for fire
        if (playerChoice === 'fire') {
            if (compChoice === 'plant') {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer wins'
                cSCore++
                updateScore()
                return
            }
        }

        // check for plant 
        if (playerChoice === 'plant') {
            if (compChoice === 'water') {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer wins'
                cSCore++
                updateScore()
                return
            }
        }

        // Check for water 
        if (playerChoice === 'water') {
            if (compChoice === 'fire') {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer wins'
                cSCore++
                updateScore()
                return
            }
        }

    }

    //Call all inner function
    startGame()
    playMatch()
}

//starrt the game function
game()