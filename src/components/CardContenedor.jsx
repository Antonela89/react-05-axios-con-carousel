import React from 'react';
import Card from 'react-bootstrap/Card';

const CardContenedor = ({image, title, descripcion}) => {
  return (
    <Card style={{width:'20%'}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${image}`}/>
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Text >{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardContenedor