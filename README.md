# 🎬 AnimeVerse

AnimeVerse is a responsive anime discovery website built with **HTML, CSS, and JavaScript**. The project uses the **Jikan API** to fetch anime data and provides features such as anime search, favorites, and detailed anime information.

## ✨ Features

* 🏠 **Home Page** – Displays a list of popular/top anime.
* 🔍 **Anime Search** – Search for anime using keywords through the Jikan API.
* ❤️ **Favorites** – Add or remove anime from your favorites.
* 💾 **LocalStorage** – Saves favorite anime IDs so favorites remain after refreshing the page.
* 📋 **Favorites List** – Displays all anime saved to the Favorites section.
* 📖 **Anime Details** – View detailed information about an anime, including:

  * Poster
  * Title
  * Rating
  * Number of episodes
  * Status
  * Genres
  * Type
  * Aired date
  * Synopsis
* 📱 **Responsive Design** – The interface adapts to different screen sizes.
* 🪟 **Modal Windows** – Search results and anime details are displayed in modal-style sections.

## 🛠️ Technologies

* **HTML5** – Semantic page structure
* **CSS3** – Styling, Flexbox, Grid, Positioning, and Responsive Design
* **JavaScript (ES6+)** – DOM manipulation and application logic
* **Jikan API** – Anime data source
* **LocalStorage** – Client-side storage for favorite anime

## 🌐 API

Anime data is provided by the Jikan API, an unofficial MyAnimeList API.

API used in the project:

* Top Anime: `https://api.jikan.moe/v4/top/anime`
* Anime Search: `https://api.jikan.moe/v4/anime?q={keyword}`
* Anime Details: `https://api.jikan.moe/v4/anime/{mal_id}`

## 📁 Project Structure

```text
AnimeVerse/
│
├── assets/
│   └── images/
│
├── css/
│   ├── reset.css
│   ├── style.css
│   └── responsive.css
│
├── js/
│   └── script.js
│
├── index.html
│
└── README.md
```

## ⚙️ How It Works

### 1. Fetch Anime Data

The project uses `fetch()` to request anime data from the Jikan API.

```javascript
fetch("https://api.jikan.moe/v4/top/anime")
    .then(response => response.json())
    .then(result => {
        // Process anime data
    });
```

### 2. Create Anime Cards

The `createAnimeCard(anime)` function dynamically creates anime cards using DOM manipulation.

Each card contains:

* Anime poster
* Anime title
* Rating
* Genres
* Favorite button
* More Details button

### 3. Search

Users can enter an anime name in the search input. The keyword is sent to the Jikan API, and the returned anime data is displayed dynamically.

### 4. Favorites

When users click the favorite button, the anime's `mal_id` is stored in `localStorage`.

```text
Click Favorite
      ↓
Get anime.mal_id
      ↓
Save ID to LocalStorage
      ↓
Refresh page
      ↓
Read saved IDs
      ↓
Display favorite status
```

### 5. Anime Details

Clicking the **More Details** button opens a modal containing detailed information about the selected anime.

## 🎯 Learning Goals

This project was created to practice and improve frontend development skills, including:

* Semantic HTML
* CSS layout and responsive design
* Flexbox and CSS Grid
* DOM manipulation
* JavaScript functions
* Arrays and objects
* Array methods such as `map()`, `join()`, and `forEach()`
* Event listeners
* Working with REST APIs
* Asynchronous JavaScript with `fetch()` and Promises
* LocalStorage
* Dynamic UI rendering
* Error handling

## 🚀 Future Improvements

* 🔐 Add Login and Profile functionality
* 🎥 Add Watch Now functionality
* ⭐ Add user ratings
* 📝 Add anime reviews
* 📑 Add pagination for search results
* ⏳ Add loading indicators
* ⚠️ Improve API error handling
* 🌙 Add theme switching
* 🔎 Add search suggestions
* 🎞️ Add anime trailers
* 📱 Further improve mobile responsiveness

## 📌 Project Status

**Current Status:** In Development 🚧

The core anime browsing, search, favorites, LocalStorage, and anime detail features have been implemented. Login/Profile functionality is planned as the next feature.
