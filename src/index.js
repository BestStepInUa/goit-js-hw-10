import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js'
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';

Notify.init({
    width: '300px',
    position: 'center-top',
    fontSize: '16px',    
});

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
// const error = document.querySelector('.error')
const catInfoCard = document.querySelector('.cat-info');

select.style.display = 'none';
// error.style.display = 'none';
catInfoCard.style.display = 'none';

select.addEventListener('change', onSelect);

fetchBreeds()
    .then(breeds => {
        select.style.display = "initial";
        select.innerHTML = createSectionOptionsMarkup(breeds);
    })
    .catch((err) => {
        console.error(err);
        loader.style.display = 'none';
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally( _ => loader.style.display = 'none')

function createSectionOptionsMarkup(breedsArr) {
    return breedsArr.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
};

function onSelect(evt) {
    loader.style.display = 'initial';

    const breedId = evt.target.value;

    fetchCatByBreed(breedId)
        .then(catData => {
            console.log(catData);
            catInfoCard.style.display = 'initial';
            createCatCardMarkup(catData);   
        })
        .catch((err) => {
        console.error(err);        
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally( _ => loader.style.display = 'none')
}

function createCatCardMarkup(catData) {
    const {
        breeds: { name, description, temperament },
        url,
    } = catData;

    const catCard = `
      <img class="cat-img" src="${url}" alt="${name}"  >
      <div class="cat-text">
      <h1 class="cat-name">${name}</h1>
      <p class="cat-description">${description}</p>
      <p class="cat-temperament"><span class="cat-temperament-span">Temperament:</span> ${temperament}</p>    
      </div>`;
    
    catInfoCard.innerHTML = catCard;
}