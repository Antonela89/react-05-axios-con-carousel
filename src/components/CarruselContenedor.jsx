import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardContenedor from './CardContenedor';
import styled from 'styled-components';

const ListadoCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `

const CarruselContenedor = ({ items }) => {
  const cardsPerPage = 3; // Número deseado de tarjetas por página

  //const carouselStyle = {
    //height: '900px', // Cambio de estilo segun necesidades
  //};

  // Dividir la lista de items en grupos más pequeños (tarjetas por página).
  const paginatedItems = [];
  for (let i = 0; i < items.length; i += cardsPerPage) {
    paginatedItems.push(items.slice(i, i + cardsPerPage));
  }

  return (
    <Carousel
      axis='horizontal'
      showStatus={false}
      showThumbs={false}
      showArrows = {true}
      dynamicHeight = {false}
      emulateTouch = {false}
      width="100%"
      infiniteLoop
      //style={carouselStyle} // aqui va el estilo 
    >
      {paginatedItems.map((page, pageIndex) => (
        <ListadoCards key={pageIndex}>
          {page.map((item) => (
            <CardContenedor
              key={item.id}
              image={item.poster_path}
              title={item.title}
              descripcion={item.overview}
            />
          ))}
        </ListadoCards>
      ))}
    </Carousel>
  );
};

export default CarruselContenedor;
