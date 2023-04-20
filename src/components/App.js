import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';



const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <GameControl />
        <Row>
          <Col><BgAnimation /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
