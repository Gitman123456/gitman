const registerForm = document.querySelector("#register-form")
const registerID = document.querySelector("#register-form #id")
const registerPassword = document.querySelector("#register-form #password")
const registerPasswordCheck = document.querySelector("#register-form #passwordCheck")
const registerName = document.querySelector("#register-form #name")
const registerEmail = document.querySelector("#register-form #email")
const registerBirth = document.querySelector("#register-form #birth")
const registerButton = document.querySelector("#register-form #button")

const USER_ID_KEY = "userID"
const USER_PASSWORD_KEY = "userPassword"

function onRegisterButtonClick(event) {
    event.preventDefault()

    const userID = registerID.value
    const userPassword = registerPassword.value
    const userPasswordCheck = registerPasswordCheck.value
    const userName = registerName.value

    if (userId=== "") {
        alert("Enter your ID")
    } else if (userPassword !== userPasswordCheck)  {
        alert("password incorrect")
    } else if (userPassword.length < 6) {
        alert("Enter a password of at least 6 characters ")
    } else if (userName === "") {
        alert("Enter your name")
    } else {
        localStorage.setItem(USER_ID_KEY, userID)
        localStorage.setItem(USER_PASSWORD_KEY, userPassword)
        alert("Sign up successfull")
        window.location.href = "intro.html"
    }

registerButton.addEventListener("click", onRegisterButtonClick)