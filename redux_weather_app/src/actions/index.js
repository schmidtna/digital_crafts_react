
import axios from 'axios';
const config = require('./config');
const ROOT_URL = `https://openweathermap.org/data/2.5/forecast?appid=${config.weather.api_key}`


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}