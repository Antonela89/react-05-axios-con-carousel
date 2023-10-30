import React from 'react';
import Card from 'react-bootstrap/Card';

const CardContenedor = ({image, title, descripcion}) => {
  return (
    <Card style={{width:'30%', height:'95vh', margin:'0.5rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border: '2px solid black', borderRadius:'20px'}}>
      <Card.Img  style={{width:'80%', height:'650px', objectFit:'cover'} }variant="top" src={`https://image.tmdb.org/t/p/w500${image}`}/>
      <Card.Body style={{width:'80%', height:'200px'}}>
        <Card.Title style={{textTransform:'uppercase', fontWeight:'bold', margin: '0.5rem'}}>{title}</Card.Title>
        <Card.Text >{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardContenedor