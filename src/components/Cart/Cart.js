import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalSalary = props.cart.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);
    let count = 1;
    return (
        <div className="cart">
            <h5>Total Selected Players: {props.cart.length}</h5>
            <table>
            <tr><th>Player's Name&nbsp;&nbsp;</th><th>Salary</th></tr>
                {
                    props.cart.map(player => <tr><td><small>{count++}. {player.name}</small></td><td><small>: {player.salary} &#2547;</small></td></tr>)
                }
            <tr><th colSpan="2"><hr></hr></th></tr>
            <tr><th><small><b>Total Expenses</b></small></th><th><small><b>: {totalSalary} &#2547;</b></small></th></tr>
            </table>
        </div>
    );
};

export default Cart;