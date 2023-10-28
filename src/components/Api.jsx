import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CarruselContenedor from './CarruselContenedor';

const  api_key = process.env.REACT_APP_API_KEY;

const Contenedor = styled.div`
    width: 100%; 
`

const Api = () => {
    const [ data, setData ] = useState([]);

    useEffect(()=> {
        getMovies(); 
     }, [])

    async function getMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=es-MX&page=1`)
        .then((response) => {setData(response.data.results)})
        .catch((error)=>{console.log(error)});  
    }
  
    return (
        <Contenedor>
            <CarruselContenedor items = {data}/>
        </Contenedor>
    )
}

export default Api