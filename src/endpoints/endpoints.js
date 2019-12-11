import { API_KEY_CMC, API_KEY_BUNGIE, API_KEY_ZOMATO } from "../../config_keys";

const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = cors + "https://developers.zomato.com/api/v2.1";

export const fetchOptions = {
    headers: {
        "X-Zomato-API-Key": API_KEY_ZOMATO
    }
};

export const categories = `${baseUrl}/categories`; //,
export const cities = `${baseUrl}/cities`; //needs lat lon
export const collections = `${baseUrl}/collections`; //needs city_id

export const getCity = (lat, lon) => {
    return `${cities}?lat=${lat}&lon=${lon}`;
};

//Food

// export const map =
//     baseUrl + "/cryptocurrency/map?CMC_PRO_API_KEY=" + API_KEY_CMC; //start stop for coin
// export const quote =
//     baseUrl +
//     "/cryptocurrency/quotes/latest?id=" +
//     id +
//     "&CMC_PRO_API_KEY=" +
//     API_KEY_CMC; //single price action, overview
// export const fcasList =
//     baseUrl +
//     "partners/flipside-crypto/fcas/listings/latest?CMC_PRO_API_KEY=" +
//     API_KEY_CMC; //scores, grade
// export const fcasQuote =
//     baseUrl +
//     "partners/flipside-crypto/fcas/quotes/latest?id=" +
//     id +
//     "&CMC_PRO_API_KEY=" +
//     API_KEY_CMC; //single score, grade
// export const metrics =
//     baseUrl + "/global-metrics/quotes?CMC_PRO_API_KEY=" + API_KEY_CMC;

// https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyMap

// others
// http://hn.algolia.com/api/v1/
// https://wesbos.com/wp-json //https://wesbos.com/wp-json/wp/v2/posts
