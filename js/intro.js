const loginForm = document.querySelector("#login-form")
const idInput = document.querySelector("#login-form #id")
const passwordInput = document.querySelector("#login-form #password")
const button = document.querySelector("#button")

function onLoginButtonClick(event) {
    event.preventDefault()

    const id = idInput.value
    const password = passwordInput.value

    if (id == "lswlsw0510@icloud.com" && password === "felix0510") {
        alert("logged in")
        window.location.href = "index.html"
    } else{
        alert("login failed")
    }
}

button.addEventListener("click", onLoginButtonClick)