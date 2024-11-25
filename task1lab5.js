const movie = {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    ratings: {
        IMDb: 8.8,
        RottenTomatoes: 87,
        Metacritic: 74,
        CommonSenseMedia: 4.0,
        FilmAffinity: 8
    } 
};

const { title, year, genre, director, ratings: { IMDb, RottenTomatoes, Metacritic, CommonSenseMedia, FilmAffinity } } = movie;
  

function calculateAverageRating({ IMDb, RottenTomatoes, Metacritic, CommonSenseMedia, FilmAffinity }) {
    let avgrating=(IMDb + RottenTomatoes + Metacritic + CommonSenseMedia + FilmAffinity) / 3;
    return (avgrating);
}
const avgrating = calculateAverageRating({ IMDb, RottenTomatoes, Metacritic, CommonSenseMedia, FilmAffinity });

console.log(`${title} (${year}), a ${genre} film directed by ${director}, has an average rating of ${avgrating}.`);
