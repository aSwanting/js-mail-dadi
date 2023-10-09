

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


// Press Play button to generate numbers
document.getElementById("playBtnDOM").addEventListener("click", function validateEmail() {

    const playerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    let gameResults

    document.getElementById("playerNumberDOM").innerHTML = playerNumber
    document.getElementById("computerNumberDOM").innerHTML = computerNumber

    playerNumber > computerNumber ? gameResults = "Humanity wins!"
        : playerNumber < computerNumber ? gameResults = "Humanity loses!"
            : gameResults = "It's a tie!"

    document.getElementById("gameResultsDOM").innerHTML = gameResults

})


