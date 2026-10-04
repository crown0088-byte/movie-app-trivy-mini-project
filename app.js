const movies = [
    { title: "Inception", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Inception" },
    { title: "The Dark Knight", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=The+Dark+Knight" },
    { title: "Interstellar", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Interstellar" },
    { title: "Avatar", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Avatar" },
    { title: "The Matrix", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=The+Matrix" },
    { title: "Gladiator", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Gladiator" },
    { title: "Joker", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Joker" },
    { title: "Dune", image: "https://via.placeholder.com/300x450/1a1a1a/f5c518?text=Dune" }
];

const movieGrid = document.getElementById('movie-grid');
const searchBar = document.getElementById('search-bar');

function displayMovies(movieList) {
    // Clear the grid before rendering
    movieGrid.innerHTML = '';
    
    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
            </div>
        `;
        
        movieGrid.appendChild(card);
    });
}

// Render all movies when the page first loads
displayMovies(movies);

// Filter movies based on search input
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    
    displayMovies(filteredMovies);
});
