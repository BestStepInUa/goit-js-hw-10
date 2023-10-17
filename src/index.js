import {fetchBreeds, fetchCatByBreed} from './js/cat-api.js'
import axios from 'axios';
axios.defaults.headers.common["x-api-key"] = "live_PT1y6jyiP6j6Uou4H075ma9te5HwnwjNAaf8UWMRCahkfYJogPikmAOX28RvdITp";

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
