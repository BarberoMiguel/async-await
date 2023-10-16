//DESARROLLA AQUI TUS SOLUCIONES

//1
async function getRandomPokemon() {
    let id = Math.round(Math.random()*177);
    pokemonRandom = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await pokemonRandom.json();
}

//2
async function getImageAndName() {
    let pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`);
    pokemonData = await pokemonData.json();
    return {img: `${pokemonData.sprites.back_default}`,
            name: `${pokemonData.name}`}
}

//3
async function printImageAndName() {
    let pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    pokemonData = await pokemonData.json();
    return section = `<section>
                        <img src=${pokemonData.sprites.back_default} alt=${pokemonData.name}>
                        <h1>${pokemonData.name}</h1>
                    </section>`
}

//4
async function getRandomDogImage() {
    let randomDogData = await fetch(`https://dog.ceo/api/breeds/image/random`);
    randomDogData = await randomDogData.json();
    let randomDogImage = randomDogData.message;
    return randomDogImage;
}

//5
async function getRandomPokemonImage() {
    let pokemon = await getRandomPokemon();
    return pokemon.sprites.back_default;
}

//6
async function printPugVsPikachu() {
    let pug = await fetch("https://dog.ceo/api/breed/pug/images");
    pug = await pug.json();
    pug = pug.message[3];
    let pikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    pikachu = await pikachu.json();
    pikachu = pikachu.sprites.front_default;
    
    let battle = `<section id="battle">
                        <img src=${pug} alt="Pug" width="200px">
                        <span>VS</span>
                        <img src=${pikachu} alt="Pikachu" width="200px">
                    </section>
                    <section id="personajes">
                    </section>`;
    document.body.innerHTML+= battle;
}
printPugVsPikachu();

//7
async function getRandomCharacter() {
    let id = Math.round((Math.random()*825)+1);
    let characterRandom = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await characterRandom.json();
}

//8
async function getRandomCharacterInfo() {
    let id = Math.round((Math.random()*825)+1);
    let characterInfo = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    characterInfo = await characterInfo.json();
    let primerEpisodio = await fetch(characterInfo.episode[0]);
    primerEpisodio = await primerEpisodio.json();
    return {img: characterInfo.image,
            name: characterInfo.name,
            episodes: characterInfo.episode,
            firstEpisode: primerEpisodio.name,
            dateEpisode: primerEpisodio.air_date}
}

//9
async function pintarDOM() {
    let character1 = await getRandomCharacterInfo();
    let episodios = `<section id=episodios>
                        <h2>Episodios en los que aparece:</h2>`;
    for (let i = 0; i < character1.episodes.length; i++) {
        episodios += `<span>${character1.episodes[i]}</span>`; 
    }
    episodios += "</section>";
    let section = `<section class="personaje">
                    <h1>Nombre: ${character1.name}</h1>
                    <img src=${character1.img} alt=${character1.name}>
                    ${episodios}
                    <h2>Nombre primer ep: ${character1.firstEpisode}</h2>
                    <h2>Fecha primer ep: ${character1.dateEpisode}</h2>
                </section>`;
    document.getElementById("personajes").innerHTML += section;
};
for (let i = 0; i < 12; i++) {
    pintarDOM();
}








