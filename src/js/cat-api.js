const BASE_API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_PT1y6jyiP6j6Uou4H075ma9te5HwnwjNAaf8UWMRCahkfYJogPikmAOX28RvdITp';

export function fetchBreeds() {
    return fetch(
        `${BASE_API_URL}/breeds?api_key=${API_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText || response.status);
        }
        return response.json();
    })
};

export function fetchCatByBreed(breedId) {
    return fetch(
        `${BASE_API_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText || response.status);
        }
        return response.json();
    })
};