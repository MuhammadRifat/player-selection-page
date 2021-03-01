import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap';


const Player = (props) => {
    const {image, name, role, team, salary, battingStyle, bowlingStyle} = props.player;
    return (
        <Col md={4}>
            <div className="player">
                <img src={image} alt=""/><br></br>
                <h4>{name}</h4>
                <div className="player-details">
                <div style={{textAlign: 'left'}}>
                    <small>Role: {role}</small><br></br>
                    <small>Team: {team}</small><br></br>
                    <small>Batting Style: {battingStyle}</small><br></br>
                    
                    {
                        bowlingStyle===""?<span></span>:<small>Bowling Style: {bowlingStyle}<br></br></small>  //fixing empty bowling style data
                    }
                    <small>Salary: {salary} &#2547;</small><br></br>
                </div>
                </div>
                <button className="btn-select" onClick={() => props.handleSelectBtn(props.player)}><FontAwesomeIcon icon={faPlus} /> Select</button>
            </div>
        </Col>
    );
};

export default Player;