import Axios from 'axios'

const API_KEY = '686660b5385326f405edf94404896eef'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`

export const FETCHWEATHER = 'FETCH_WEATHER'

export function fetchWeather( city ){
    const url = `${ROOT_URL}appid=${API_KEY}&q=${city},us`
    const request = Axios.get( url )
   

    return {
        type: FETCHWEATHER, 
        payload: request
    }
}