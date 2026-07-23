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
const logoutBtn = document.querySelector(".logout-btn");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault(); /* duyet xem co hop le khong */

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
    emailInput.value = ""; /* tra ve trong khi gap loi */
    passwordInput.value = ""; /* tra ve trong khi gap loi */

    loginModal.classList.add("hidden"); /* dong o dang nhap */

    loginBtn.classList.add("hidden"); /* tat hien thi nut login */

    logoutBtn.classList.remove("hidden");

    welcomeText.classList.remove("hidden"); /* hien chu welcome! */
}

});

/* Menu cho Mobile */ 
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () { /* an dau 3 gach thi hien thi noi dung */

    navMenu.classList.toggle("active");

});

// Function

function createAnimeCard(anime) {
    //Card
    const card = document.createElement("article"); /* them article */
    card.classList.add("movie-card"); /* them class cho article de moi article la mot card phim */

    // Image
    const image = document.createElement("img");
    image.src = anime.images.jpg.image_url;
    image.alt = anime.title_english || anime.title;

    //Title
    const title = document.createElement("h3");
    title.textContent = anime.title_english || anime.title;

    //Rating
    const rating = document.createElement("p");
    rating.textContent = `⭐ ${anime.score}`;

    // Genre
    const genre = document.createElement("p");
    const genres = anime.genres.map(genre => genre.name); /* voi moi genre lay thuoc tinh name */
    genre.textContent = genres.join(" • ");

    //Detail Button
    const detailButton = document.createElement("button");
    detailButton.classList.add("detail-btn");
    detailButton.textContent = "More Details";

    // Favorite Button
    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-btn");
    favoriteButton.textContent = "❤️";

    // Kiểm tra anime đã được yêu thích chưa
    const isFavorite = localStorage.getItem(`favorite_${anime.mal_id}`);

    // Nếu đã yêu thích → hiển thị 💖
    if (isFavorite) {
        favoriteButton.textContent = "💖";
    }

    favoriteButton.addEventListener("click", function () {
        if (favoriteButton.textContent === "❤️") {
            favoriteButton.textContent = "💖";
            localStorage.setItem(
            `favorite_${anime.mal_id}`,"true");
        }
        else {
            favoriteButton.textContent = "❤️";
            localStorage.removeItem(`favorite_${anime.mal_id}`)
        }
    });

    // Dua tat ca vao card 
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(rating);
    card.appendChild(genre);
    card.appendChild(detailButton);
    card.appendChild(favoriteButton);
    
    return card;
    
};


/* API */
const animeList = document.querySelector("#anime-list");

fetch("https://api.jikan.moe/v4/top/anime")
    .then(response => response.json())
    .then(result => {
        result.data.forEach(anime => { /* lay tu kho ttin */
        
            const card = createAnimeCard(anime);

            // Dua cac card vao list
            animeList.appendChild(card); /* dua card vao movie-grid */
            
        });
    });

// Search Input
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector("#search-btn");

const searchDiv = document.querySelector(".search-result-div");
const closeSearchBtn = document.querySelector("#close-search");

const animeSearch = document.querySelector("#search-result")

searchBtn.addEventListener("click", function() {
    const keyword = searchInput.value.trim();

    if (!keyword) {
        return;
    }

    searchDiv.classList.add("active");

    fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
        .then(response => response.json())
        .then(result => {

            // Xóa Card cũ
            animeSearch.innerHTML = "";

            // Hiển thị kết quả Search
            result.data.forEach(anime => {

                const card = createAnimeCard(anime);

                animeSearch.appendChild(card);

            });
            
        })

});
closeSearchBtn.addEventListener("click", function() {

    searchDiv.classList.remove("active");

});