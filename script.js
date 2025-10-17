
const baseURL = 'https://superheroapi.com/api.php/978190916736019';
const newHeroBtn = document.getElementById('newHeroButton');

const getSuperHero = () =>{
    const heroImage = document.getElementById('heroImage');
    const nameSpan = document.getElementById('nameSpan');
    const ageSpan = document.getElementById('ageSpan');
    const powerSpan = document.getElementById('powerSpan');
    const id = Math.floor((Math.random() * 731)) + 1;
    fetch(`${baseURL}/${id}`)
    .then(response => response.json())
    .then(json => {
        heroImage.innerHTML = `<img src='${json.image.url}' />`;
        nameSpan.innerText = ` ${json.name}`;
        ageSpan.innerText = ` ${json.appearance.gender}`;
        powerSpan.innerText = ` ${json.powerstats.power}`;
    })
}

newHeroBtn.onclick = () => getSuperHero();