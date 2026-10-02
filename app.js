const movies = [
    { title: "The Pipeline", rating: "8.9", year: 2026 },
    { title: "Containerized", rating: "9.2", year: 2025 },
    { title: "Return of the Node", rating: "7.8", year: 2024 },
    { title: "Vulnerability Scanned", rating: "8.5", year: 2026 },
    { title: "The Deployment", rating: "9.5", year: 2023 }
];

document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.getElementById("movie-grid");
    
    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        
        card.innerHTML = `
            <div class="movie-poster">Image Placehoder<br>${movie.title}</div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title} (${movie.year})</h3>
                <div class="movie-rating">★ ${movie.rating}/10</div>
            </div>
        `;
        
        movieGrid.appendChild(card);
    });
});
