const baseURL = 'https://pokeapi.co/api/v2/';

let pokemonList = document.querySelector('ul');

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
const image = document.querySelector('.image');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();
    url = baseURL + 'pokemon/' + searchTerm.value.toLowerCase();
    console.log('URL:', url);
    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            let pokemon = json.name;
            let abilities = json.abilities;
            let stats = json.stats;

            while (pokemonList.firstChild) {
                pokemonList.removeChild(pokemonList.firstChild);
            }

            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }

            let listItem1 = document.createElement('li');
            listItem1.innerHTML = '<p>' + 'Name: ' + pokemon + '</p>';
            pokemonList.appendChild(listItem1);

            for (let i = 0; i < abilities.length; i++) {
                console.log(abilities[i]);
                let ability = document.createElement('li');
                ability.innerHTML = '<p>' + 'Ability: ' + abilities[i].ability.name + '</p>'
                pokemonList.appendChild(ability);
            }

            for (let s = 0; s < stats.length; s++) {
                let stat = document.createElement('li');
                stat.innerHTML = '<p>' + 'Stat: ' + stats[s].stat.name + '</p>'
                pokemonList.appendChild(stat);
            }

            image.src = json.sprites.front_default;
        });
};