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

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let html = `<tr><th>NAME</th><th>ID</th><th>RATING</th></tr>`;

    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        $("#loading").hide();

        html += `<tr>
<td>${title}</td><td>${id}</td><td>${rating}</td>
</tr>`;


    })

    $('#table').html(html);
    $("#add-movie").click(function (e) {
        e.preventDefault();
        let movieName = $("#movie-name").val();
        let movieRating = $("#movie-rating").val();
        let movieID = $(movies.id).val();
        console.log(movieRating + 1);
        console.log(movies);
        postMovie({
            movieName,
            movieRating,
            movieID
        });
        getMovies();
        let addHTML = `<tr>
<td>${movieName}</td>
for (var i = 1; i > 2; i++){ 
<td>${movieID[i]}</td>
}
<td>${movieRating}</td>
</tr>`;
        $("#table").append(addHTML);
    })
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});
