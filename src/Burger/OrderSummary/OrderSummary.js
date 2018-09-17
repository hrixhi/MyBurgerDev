import React from 'react';
import Aux from '../../HOC/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igKey => {
        return <li><span key={igKey} style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}</li>
    });
    return (
        <Aux>
            <h3>Your Order</h3> 
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <strong>TOTAL: {props.price}</strong><br/>
            <Button btnType="Danger" clicked={props.clicked}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    );

};

export default OrderSummary;