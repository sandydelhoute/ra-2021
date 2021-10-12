import Axios from 'axios';
import { useState, useEffect } from 'react';
import {CustomMap} from '../components/customMap/index';

const getCountries = () =>
    Axios.get('https://restcountries.com/v3.1/all');
export const HttpRequests = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>
        getCountries()     
            .then(
                (results) => {
                    console.log('promessse resolue !');
                    console.log(results.data);
                    setCountries(results.data);
                })
            .catch(
                error => {
                    console.log("error");
                    throw error;
                }), []);
    return <>
        http request
        {
            countries.count
        }
        <CustomMap {...{countries}}></CustomMap>
    </>

}

