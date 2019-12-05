import { API_KEY_CMC, API_Key_BUNGIE } from "../../config_keys";

const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = cors + "https://pro-api.coinmarketcap.com/v1";
const id = 2;

export const list = `${baseUrl}/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`; //all coins, overview
export const info = `${baseUrl}/cryptocurrency/info?id=${id}&CMC_PRO_API_KEY=${API_KEY_CMC}`; //single description, details, category

//Bungie
export const fetchOptions = {
    headers: {
        "X-API-Key": API_Key_BUNGIE
    }
};
const base = cors + "https://www.bungie.net/Platform";
export const bungie = `${base}/App/FirstParty/`;
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
