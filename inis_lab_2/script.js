let personalMovieDB = {
    movies: [
        {lastWached: "Скотт пилигрим против всех", filmScore: 9},
        {lastWached: "Малышь на драйве", filmScore: 8},
        {lastWached: "Ветер крепчает", filmScore: 9.5},
        {lastWached: "Самый лучший фильм", filmScore: 7},
        {lastWached: "О чем говорят мужчины", filmScore: 8},
        {lastWached: "Проститутки", filmScore: 6}
    ],

    private: false,
};

function movieTable(){

    if (personalMovieDB.private == true) return;
    let table = document.querySelector('.table');
    table.innerHTML += "<tr><td>Фильмы</td><td>Оценка</td></tr>"
    let count = 0
    for(const movie in personalMovieDB.movies){
        let col = document.createElement('tr');
        col.innerHTML += "<td>" + personalMovieDB.movies[count].lastWached + "</td>";
        col.innerHTML += "<td>" + personalMovieDB.movies[count].filmScore + "</td>";
        table.append(col);
        count++;
    }

}

