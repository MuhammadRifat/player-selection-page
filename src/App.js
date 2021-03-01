import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './components/Player/Player';
import { useEffect, useState } from 'react';
import playersData from './components/playerData/playerData.json';
import Cart from './components/Cart/Cart';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
  }, [])
  return (
    <Container>
      <Row>
        <Col md={9} className="player-container">
          <Row>
            {
              players.map(player => <Player player={player} key={player.id}></Player>)
            }
          </Row>
        </Col>
        <Col md={3} className="cart-container">
            <Cart></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
