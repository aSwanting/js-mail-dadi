

// Get user email
function getUserEmail() {
    const userEmail = document.getElementById("userEmailDOM").value
    return userEmail
}

// Compare with Array
function checkUserEmailwithArray() {

    let emailPresent = false

    const emailAdresses = [
        "john@gmail.com",
        "gab@gmail.com",
        "mike@gmail.com",
        "alice@gmail.com",
        "harry@gmail.com",
        "maria@gmail.com",
        "gemma@gmail.com",
        "gianluca@gmail.com",
        "nicola@gmail.com",
        "anna@gmail.com",
    ]

    for (i = 0; i < emailAdresses.length; i++) {

        if (getUserEmail() === emailAdresses[i]) {
            emailPresent = true
        }
    }

    return emailPresent

}

// Add Validation to form input
document.getElementById("checkBtnDOM").addEventListener("click", function validateEmail() {

    const formValidation = document.getElementById("userEmailDOM").classList


    if (!checkUserEmailwithArray()) {
        console.log(checkUserEmailwithArray())
        formValidation.remove("is-valid")
        formValidation.add("is-invalid")

    } else {
        console.log(checkUserEmailwithArray())
        formValidation.remove("is-invalid")
        formValidation.add("is-valid")
    }

})

// Generate random number from 1 - 6, animate dice
function rollDice() {

    const playerDice = document.getElementById("playerNumberDOM")
    const computerDice = document.getElementById("computerNumberDOM")

    const diceSides = [
        `<i class="fas fa-dice-one"></i>`,
        `<i class="fas fa-dice-two"></i>`,
        `<i class="fas fa-dice-three"></i>`,
        `<i class="fas fa-dice-four"></i>`,
        `<i class="fas fa-dice-five"></i>`,
        `<i class="fas fa-dice-six"></i>`,
    ]

    const playerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1)

    playerDice.classList.remove("active")
    computerDice.classList.remove("active")
    document.getElementById("reflow").offsetWidth

    playerDice.innerHTML = diceSides[playerNumber - 1]
    playerDice.classList.add("active")

    computerDice.innerHTML = diceSides[computerNumber - 1]
    computerDice.classList.add("active")

    return { playerNumber, computerNumber }

}


// Play game on click, print winner
document.getElementById("playBtnDOM").addEventListener("click", function chooseWinner() {

    document.getElementById("gameResultsDOM").innerHTML = "..."

    const results = rollDice()
    let gameResults

    document.getElementById("playerNumberDOM").classList.remove("border-success", "border-danger", "border-warning")
    document.getElementById("computerNumberDOM").classList.remove("border-success", "border-danger", "border-warning")

    setTimeout(() => {

        if (results.playerNumber > results.computerNumber) {
            gameResults = "Humanity wins!"
            document.getElementById("playerNumberDOM").classList.add("border-success")
            document.getElementById("computerNumberDOM").classList.add("border-danger")

        } else if (results.playerNumber < results.computerNumber) {
            gameResults = "Humanity loses!"
            document.getElementById("playerNumberDOM").classList.add("border-danger")
            document.getElementById("computerNumberDOM").classList.add("border-success")

        } else {
            gameResults = "It's a tie!"
            document.getElementById("playerNumberDOM").classList.add("border-warning")
            document.getElementById("computerNumberDOM").classList.add("border-warning")
        }

        document.getElementById("gameResultsDOM").innerHTML = gameResults

    }, 1000);

})

