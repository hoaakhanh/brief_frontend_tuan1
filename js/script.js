/* Hieu ung cho All top favorite button */
const favoriteButtons = document.querySelectorAll(".favorite-btn"); /* chon tat ca cac button co class favorite-btn */
favoriteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === "❤") {
            button.textContent = "💖";
        }
        else {
            button.textContent = "❤";
        }
    });
});

/* Hieu ung cho 1 button watch now Featured Anime */
const movieButton = document.querySelector(".hero #watch-now"); /* chon tat ca cac button co class top-button */
movieButton.addEventListener("click", function () {
    movieButton.textContent = "🎬 Watching...";
});


/* Login form validation */
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close-btn");
const loginModal = document.querySelector(".login-modal");

loginBtn.addEventListener("click", function () {
    loginModal.classList.remove("hidden"); /* hien o dang nhap */
});

closeBtn.addEventListener("click", function () {
    loginModal.classList.add("hidden"); /* dong o dang nhap */
});

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");


const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const welcomeText = document.querySelector(".welcome-text");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (emailInput.value === "") {
        emailError.textContent = "Please enter your email";
    }
    else if (!emailInput.value.includes("@gmail.com")) {
        emailError.textContent = "Invalid email";
    }
    else if (passwordInput.value === "") {
        passwordError.textContent = "Please enter your password";
    }
    else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";

    }
    else {
    emailInput.value = "";
    passwordInput.value = "";

    loginModal.classList.add("hidden");

    loginBtn.classList.add("hidden");
    welcomeText.classList.remove("hidden");
}

});

/* Menu */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});