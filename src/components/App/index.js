import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import TaskCard from '../TaskCard';

//DELETE THIS
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus etf ultrices posuere cubilia curae; Duis scelerisque diam in tortor maximus, quis laoreet massa laoreet. Nam aliquam luctus congue. Maecenas cursus mi neque, non hendrerit metus suscipit at. Sed vitae magna diam. Cras posuere vel nisl ut auctor.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a vehicula augue. Sed fringilla posuere eros, a consectetur nisi vulputate quis. Vestibulum ante ipsum primis in faucibus orci luctus";
//

function App() {
  return (
    <div className="App">
      <Container>
        <CardDeck className="mt-3">
          <TaskCard key="1" title="Tarjeta 1" content={lorem} priority="1" author="Facundo Juarez" dateCreated="10/05/20" dateUpdated="19/05/20" />
          <TaskCard key="2" title="Tarjeta 2" content={lorem2} priority="0" author="Roberto" dateCreated="15/01/19"/>
          <TaskCard key="3" title="Tarjeta 3" priority="2"  author="Raulito" dateCreated="30/01/20"/>
          <TaskCard key="4" title="Tarjeta 4" priority="3" author="Sofía"/>
        </CardDeck>
      </Container>
    </div>
  );
}

export default App;