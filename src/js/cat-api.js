import axios from 'axios';
axios.defaults.headers.common["x-api-key"] = "live_PT1y6jyiP6j6Uou4H075ma9te5HwnwjNAaf8UWMRCahkfYJogPikmAOX28RvdITp";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
const BASE_API_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return fetch(
        `${BASE_API_URL}/breeds`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
};

export function fetchCatByBreed(breedId) {
    return fetch(
        `${BASE_API_URL}/images/search?breed_ids=${breedId}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
};