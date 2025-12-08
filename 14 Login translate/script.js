const container = document.querySelector('.container');
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");

signUpBtn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})

signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode")
})
