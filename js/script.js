

// Get user email
function getUserEmail() {
    const userEmail = document.getElementById("userEmailDOM").value
    return userEmail
}

// Compare with Array
function checkUserEmailwithArray() {

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
            return true
        }
    }

    return false

}

// Add Validation to form input
document.getElementById("checkBtnDOM").addEventListener("click", function validateEmail() {

    const formValidation = document.getElementById("userEmailDOM").classList


    if (!checkUserEmailwithArray()) {
        formValidation.remove("is-valid")
        formValidation.add("is-invalid")

    } else {
        formValidation.remove("is-invalid")
        formValidation.add("is-valid")
    }

})