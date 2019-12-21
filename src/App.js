import React from 'react';
//import React, {Fragment} from 'react'; //asi se agrega la etiqueta de Fragment

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">Primary</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/



//Usando fragment
/*const App = () => (
  <Fragment>
    <div>
      <h1>Hola Ana</h1>
      <p>Mi react</p>
    </div>
    <div>
      <h1>Hola Vivas</h1>
      <p>Mi react2</p>
    </div>
  </Fragment>
)*/

//usando <></>
/*const App = () => (
  <>
    <div className="saludo">
      <h1>Hola Ana</h1>
      <p>Mi react</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div>
      <h1>Hola Vivas</h1>
      <p>Mi react2</p>
    </div>
  </>
)
export default App;*/


//Reglas JSX
//1- Toda etiqueta debe cerrarse
//2- Lo componentes los debe envolver un solo padre
//3- Apoyarse en los Fragmente para varios elementos o <></>
//4- Las clases se agregan como className
//5- for = htmlFor
//6- dentro de jsc no se usa if, else, while

const datosCards = [
  {
    title: 'Pug desde cero',
    image: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/cursos-pug.jpg',
    text: 'Con pug puedes escribir código HTML sencillo y agregarle lógica de...'    
  },
  {
    title: 'JavaScript desde cero',
    image: 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/javascript_0.jpg?itok=aKHihrP0',
    text: 'Aprende el lenguaje de programación más importante de l...'    
  },
  {
    title: 'Markdown desde cero',
    image: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/markdown-poster.png',
    text: 'Escribe código HTML limpio sin preocuparte de las etiquetas ni...'    
  }
]

const App =() => (
  <Container fluid="true">
    <Row>
      <Col>
        <Carousel className='mb-4'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-ppt-minimalistic-geometric-background-backgroundppt-template-backgroundsimplecool-image_54790.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-ppt-minimalistic-geometric-background-backgroundppt-template-backgroundsimplecool-image_54790.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-ppt-minimalistic-geometric-background-backgroundppt-template-backgroundsimplecool-image_54790.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row>
    {/*  <Cards 
        title="Pug desde cero" 
        text="Con pug puedes escribir código HTML sencillo y agregarle lógica de..." 
        textbutton="Ver más"
        image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/cursos-pug.jpg"/>
      <Cards
        title="JavaScript desde cero" 
        text="Aprende el lenguaje de programación más importante de l..." 
        textbutton="Ver más"
        image="https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/javascript_0.jpg?itok=aKHihrP0"/>
      <Cards
          title="Markdown desde cero" 
          text="Escribe código HTML limpio sin preocuparte de las etiquetas ni..." 
          textbutton="Ver más"
          image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/markdown-poster.png"/>
      <Cards
          text="Escribe código HTML limpio sin preocuparte de las etiquetas ni..." 
          textbutton="Ver más"/> 
      */}
      {/*Recorriendo arrays, map es de js normal, este recorre arrays los asigna a una variable
       y luego dibuja un Cards por cada elemento del array*/}

      {
        datosCards.map( c => <Cards title={c.title} image={c.image} text={c.text} textbutton={c.textbutton}/>)
      }         
    </Row>

 

  </Container>
)

export default App;