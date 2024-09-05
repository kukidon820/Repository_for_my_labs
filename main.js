// 1. Запрос количества просмотренных фильмов
let numberOfFilms;

do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms));

// 2. Создание объекта personalMovieDB
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};

// 3. Цикл для ввода фильмов и оценок
for (let i = 0; i < 2; i++) {
    let lastMovie, movieRating;

    do {
        lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    } while (lastMovie === '' || lastMovie == null || lastMovie.length > 50);

    do {
        movieRating = prompt('На сколько оцените его?', '');
    } while (movieRating === '' || movieRating == null || isNaN(movieRating));

    // 4. Запись данных в объект movies
    personalMovieDB.movies[lastMovie] = movieRating;
}

// 5. Вывод объекта в консоль
document.body.innerHTML = `<pre>${JSON.stringify(personalMovieDB, null, 2)}</pre>`;
