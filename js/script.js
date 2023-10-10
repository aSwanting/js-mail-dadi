

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

// Generate random number from 1 - 6
function rollDice() {

    const diceSide = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    return diceSide
}


// Press Play button to choose a winner
document.getElementById("playBtnDOM").addEventListener("click", function chooseWinner() {

    const diceSides = [
        `<i class="fas fa-dice-one"></i>`,
        `<i class="fas fa-dice-two"></i>`,
        `<i class="fas fa-dice-three"></i>`,
        `<i class="fas fa-dice-four"></i>`,
        `<i class="fas fa-dice-five"></i>`,
        `<i class="fas fa-dice-six"></i>`,
    ]

    const playerNumber = rollDice()
    const computerNumber = rollDice()
    let gameResults

    document.getElementById("playerNumberDOM").innerHTML = diceSides[playerNumber-1]
    document.getElementById("computerNumberDOM").innerHTML = diceSides[computerNumber-1]

    playerNumber > computerNumber ? gameResults = "Humanity wins!"
        : playerNumber < computerNumber ? gameResults = "Humanity loses!"
            : gameResults = "It's a tie!"

    document.getElementById("gameResultsDOM").innerHTML = gameResults

})


