module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        // .then(function(data){
        //
        // })
      .then(response => response.json());
  },



  postMovie: (title, rating) => {
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(title, rating),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
  },

  // updateMovies: (title, rating) => {
  //   return fetch('api/movies', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(title, rating),
  //   })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(error => console.error(error));
  // },

  // editMovies: (data, id) => {
  //   return fetch ('api/movies/${id}', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(error => console.error(error));
  // }

};

