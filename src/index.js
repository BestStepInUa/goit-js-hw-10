import {fetchBreeds, fetchCatByBreed} from './js/cat-api.js'

const select = document.querySelector('.breed-select');
// select.addEventListener('select', onSelect);

fetchBreeds()
    .then((breeds) => select.innerHTML = createSectionOptionsMarkup(breeds))
    .catch((err) => console.error(err));

function createSectionOptionsMarkup(breedsArr) {
    return breedsArr.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
};
