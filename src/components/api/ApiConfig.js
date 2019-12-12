import apiKey from "./Config";

const api = apiKey;
const baseUrl = "https://api.themoviedb.org/3/";
const url = `${baseUrl}discover/movie?api_key=${api}`;

export default url;
