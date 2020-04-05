const getData = () => {
    const movieTitle = document.getElementById("movie").value;
    var queryURL =
        `https://www.omdbapi.com/?t=${movieTitle}=&plot=short&apikey=trilogy`
    // Make a request for a user with a given ID
    axios
        .get(queryURL)
        .then(function (response) {
            if (response.data.Error) {
                // handle error
                alert('Error! Please try a different movie title.')
            } else {
                // handle success
                console.log(response);
                document.getElementById("title").innerHTML = response.data.Title;
                document.getElementById("plot").innerHTML = response.data.Plot;
                document.getElementById("movieImage").src = response.data.Poster;
            }})
        .catch(function (error) {
            // handle error
            console.log(error.response.data);
          })
        .then(function () {
        // always executed
        });
};