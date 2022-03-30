import { mocks, mockImages } from "./mock";
import camelize from 'camelize'

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
        reject("not found");
        }
        // jika ada lokasinya, resolve
        resolve(mock);
    });
    };

export const restaurantsTransform = ({ results = [] }) => {
    
    const mappedResults = results.map((restaurant) => {
        
        restaurant.photos = restaurant.photos.map((p) => {
            // ngambil random 1 photo dan dikali degan mockImages.length - 1 supaya cuman render masing-masing 1 photo
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });

        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(mappedResults);
};

    // restaurantsRequest()
    // // tangkep value dari function resto transform
    // .then(restaurantsTransform)
    // // assign ke variable trasnformedResponse
    // .then((transformedResponse) => {
    //     console.log(transformedResponse);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });