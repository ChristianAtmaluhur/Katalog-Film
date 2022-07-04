window.addEventListener('DOMContentLoaded', () => {
    fetchMovie();
})


// fetch
const APIKey = '374e68a61ddf3586ea4ffed09f873d81'
function fetchMovie(list = 'popular') {
    fetch(`https://api.themoviedb.org/3/movie/${list}?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            const { results } = data;
            renderCard(results);
        });
}

// render 
function renderCard(arr) {
    const container = document.querySelector('.card-container');
    let listsDOM = '';
    arr.forEach( (element) => {
        listsDOM += `<div class="card">
                        <img class="img" src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        <h1 class="title">${element.original_title}</h1>
                    </div>`
    });
    container.innerHTML = listsDOM;
}
