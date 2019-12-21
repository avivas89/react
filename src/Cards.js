import React from 'react';
//import logo from './logo.svg';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

/*const Cards = props => (
  <Card>
    <Card.Img variant="top" src={props.image} alt={props.title}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Button variant="primary">{props.textbutton}</Button>
    </Card.Body>
  </Card>
)*/

//Otra forma de imprimir las propiedades usando js normal para 
//cuando no se ingresa el valor de las props
/*const Cards = ({title, image, textbutton, text}) => (
  <Card>
    <Card.Img variant="top" 
      src={
          image 
            ? `${image}`  
            : "https://x.kinja-static.com/assets/images/logos/placeholders/default.png" 
          }
    alt={title} />
    <Card.Body>
      <Card.Title>
        {
          title
          ? `${title}`
          : <p>Título del Curso</p>
        }
      </Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <Button variant="primary">{textbutton}</Button>
    </Card.Body>
  </Card>
)*/

//Utilizando PropTypes, instalamos la libreria npm add prop-types y luego la importamos
const Cards = ({title, image, textbutton, text}) => (
  <Col xs={12} md={4} className='mb-1'>
    <Card>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">{textbutton}</Button>
      </Card.Body>
    </Card>
  </Col>  
)

Cards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  textbutton: PropTypes.string
}

Cards.defaultProps = {
  title: 'Título del Curso',
  image: 'https://x.kinja-static.com/assets/images/logos/placeholders/default.png',
  text: 'Info del curso',
  textbutton: 'Ver más'
}
export default Cards;