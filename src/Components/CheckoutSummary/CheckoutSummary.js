import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1><br/>We hope it tastes well!</h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
            <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        
        </div>
    );
}

export default CheckoutSummary;