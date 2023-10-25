const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

var section = document.getElementById('section');
var form = document.getElementById('form');
var search = document.getElementById('song-search');

getMovies(APILINK);
function getMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                section.appendChild(div_row);
            });
        });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    section.innerHTML='';

    const searchValue=search.value;
    if(searchValue){
        getMovies(SEARCHAPI+searchValue);
        search.value='';
    }
});
