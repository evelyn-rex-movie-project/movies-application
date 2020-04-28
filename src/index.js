/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

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
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});
