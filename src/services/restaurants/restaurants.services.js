import { mocks } from "./mock";
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

    const restaurantsTransform = (result) => {
        const newResult = camelize(result);
        return newResult;
    };

    restaurantsRequest()
    // tangkep value dari function resto transform
    .then(restaurantsTransform)
    // assign ke variable trasnformedResponse
    .then((transformedResponse) => {
        console.log(transformedResponse);
    })
    .catch((err) => {
        console.log(err);
    });