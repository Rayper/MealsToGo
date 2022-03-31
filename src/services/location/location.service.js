import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        // create variable untuk data yang dicari
        const locationMock = locations[searchTerm];
        // validasi jika data yang dicari tidak ada
        if (!locationMock) {
        reject("not found");
        }
        // jika ada, resolve data
        resolve(locationMock);
    });
    };

export const locationTransform = (result) => {
    // camelize resultnya 
    const formattedResponse = camelize(result);
    // create menjadi sebuah object
    const { geometry = {} } = formattedResponse.results[0];
    // ambil data lat dan lng nya
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
};