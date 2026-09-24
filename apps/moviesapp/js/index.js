// χρησιμοποιούμε JQuery
$(function() {
    let debounceTimeout = null
    $('#searchInput').on('input', function() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => getMovie($(this).val().trim()), 500);     
        // έχει εσωτ. scope
    });

    $('#showMore').on('click', function(e) {      // (e) hoist scope (this) εσωτ.
        e.preventDefault();
        onShowMoreClicked();
    });
    // σε arrow function δεν έχει εσωτερικό scope το (this)

    // preventDefault - popular εντολή για 1.φόρμες (submit με δικό μου handler) / 2.
    $('form').on('submit', (e) => e.preventDefault());
});

function getMovie(title) {
    if (!title) return;   // null ή undefined

    onBeforeSend();     // θα πρέπει να προηγηθούν κάποιες ενέργειες
    fetchMovieFromApi(title);
};

function onBeforeSend() {
    showComponent('#waiting');
    hideComponent('#movie');
    hideComponent('#notFound');
    hideComponent('#error');
    hideComponent('#extended');
};

function fetchMovieFromApi(title) {
    axios
    .get(`http://www.omdbapi.com/?t=${title}&apikey=a8c6c319`)
    .then((response) => {
        handlerResults(response.data)
    })
    .catch((error) => {
        console.error('Error fetching movie data:', error.message);
        onApiError();
    })
    .finally(() => hideComponent('#waiting'));     // σε κάθε περίπτωση να γίνει hide
};

function handlerResults(data) {
    if (data.Response === 'True') {              // Response JSON από το db
        render(data)
    } else {
        showComponent('#notFound');
    }
};

function render(data) {
    const poster = data.Poster !== 'N/A' ? data.Poster : './img/no-poster.img';

    // όπως τα δίνει το API ta data.(...) etc
    $('#image').attr( {src: poster, alt: data.Title });
    $('#imdbId').attr('href', `https://www.imdb.com/title/${data.imdbID}`);
    $('#title').text(data.Title);
    $('#year').text(`Έτος παραγωγής: ${data.Year}`);
    $('#runtime').text(`Διάρκεια: ${data.Runtime}`);
    $('#genre').text(`Είδος: ${data.Genre}`);
    $('#imdbRating').text(data.imdbRating);
    $('#plot').text(data.Plot);
    $('#director span').text(data.Director);
    $('#actors span').text(data.Actors);
    $('#production span').text(data.Production);
    $('#boxOffice span').text(data.BoxOffice);
    $('#language span').text(data.Language);
    $('#rated span').text(data.Rated);

    showComponent('#movie');
}

function onShowMoreClicked() {
    $('#extended').slideToggle(1000);
}

// 2 βοηθητικές μέθοδοι υλοποιούνται πριν τη onBeforeSend
function showComponent(component) {
    return $(component).removeClass('hidden');       // returns jquery Obj
};

function hideComponent(component) {
    return $(component).addClass('hidden');       // tailwind class
};

function onApiError() {
    showComponent('#error');
}




