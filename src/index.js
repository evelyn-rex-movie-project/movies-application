/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const {postMovie} = require('./api.js');
const {updateMovies} = require('./api.js');

createTable();

$("#add-movie").click(function (e) {
    e.preventDefault();
    let movieName = $("#movie-name").val();
    let movieRating = $("#movie-rating").val();
    console.log(movieName, movieRating);
    postMovie({"title": movieName,
        "rating": movieRating
    });
    createTable();


});

function createTable() {
    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        let html = `<tr><th>NAME</th><th>ID</th><th>RATING</th></tr>`;

        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            $("#loading").hide();

            html += `<tr>
<td>${title}</td><td>${id}</td><td>${rating}</td>
</tr>`;


        });

        $('#table').html(html);


    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.error(error);
    });
}
