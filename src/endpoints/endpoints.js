import { API_KEY_CMC } from "../../config_keys";

const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = cors + "https://pro-api.coinmarketcap.com/v1";
const id = 2;

export const list = `${baseUrl}/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`; //all coins, overview
export const info = `${baseUrl}/cryptocurrency/info?id=${id}&CMC_PRO_API_KEY=${API_KEY_CMC}`; //single description, details, category
