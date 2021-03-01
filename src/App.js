import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './components/Player/Player';
import { useEffect, useState } from 'react';
import playersData from './components/playerData/playerData.json';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
  }, [])
  const [cart, setCart] = useState([]);

  // For handling Select button
  const handleSelectBtn = (player) => {
    let isExist = false;
    for(let i = 0; i < cart.length; i++){      
      if(player.id === cart[i].id){       // Checking duplicate data
        isExist = true;
        break;
      }
    }
    if(isExist){
      alert("This player has already selected.");
    }
    else{
      const newCart = [...cart, player];
      setCart(newCart);
    }
  };
  return (
    <div>
      <Nav></Nav>
      <Container>
        <Row>
          <Col lg={{span: 3, order: 'last'}} className="cart-container">
              <Cart cart={cart}></Cart>
          </Col>
          <Col lg={{span: 9, order: 'first'}} className="player-container">
            <Row>
              {
                players.map(player => <Player player={player} key={player.id} handleSelectBtn={handleSelectBtn}></Player>)
              }
            </Row>
          </Col>
          {/* order property  used for the last column showing first*/}
        </Row>
      </Container>
    </div>
  );
}

export default App;
