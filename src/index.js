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
const {editMovies} = require('./api.js');
const {deleteMovies} = require('./api.js');

createTable();
//variables that get our input text into the table


//button to add movies to list
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

//button to edit existing movies



function createTable() {
    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        let html = `<tr><th class="header">NAME</th><th class="header">ID</th><th class="header">RATING</th><th class="header">EDIT/DELETE</th></tr>`;

        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            $("#loading").hide();

            html += `<tr>
<td class="font-weight-bold page-data">${title}</td>
<td class="font-weight-bold page-data">${id}</td>
<td class="font-weight-bold page-data">${rating}</td>
<td><button type="submit" class="edit modify" data-id="${id}">Edit</button><button type="submit" class="delete delete-button" data-id="${id}">Delete</button>
</td>
</tr>`;

            $('#table').html(html);
        });
        $(".edit").click(function(){
             // e.preventDefault();
            let dataID = $(this).attr("data-id");
            let dataTitle = $("#edit-movie-name").val();
            let dataRating = $("#edit-movie-rating").val();
            let data = {title: dataTitle, rating: dataRating};

            editMovies(data, dataID);
            createTable();
            console.log("click");
        });

        $(".delete").click(function(){
            let dataID = $(this).attr("data-id");
            let dataTitle = $("#edit-movie-name").val();
            let dataRating = $("#edit-movie-rating").val();
            let data = {title: dataTitle, rating: dataRating};
            deleteMovies(data, dataID);
            createTable();
            console.log("click");
        });



    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.error(error);
    });
}
