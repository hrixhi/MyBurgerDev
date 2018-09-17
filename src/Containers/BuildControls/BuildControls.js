import React from 'react';
import classes from './BuildControls.css';
import Aux from '../../HOC/Aux';
import Control from './Control/Control';

const BuildControls = (props) => {

    let controlOptions = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    return (
        <Aux>
        <div className={classes.BuildControls}>
        <div><strong>Price: {props.price.toFixed(2)}</strong></div>
            {controlOptions.map((ctrl) => (
                <Control key={ctrl.label} label={ctrl.type} type={ctrl.type} add={() => props.add(ctrl.type)} remove={()=> props.remove(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
            ))}
        <br/>
        <button onClick={props.showModal} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        <br/>
        </div>
        </Aux>
    );
};

export default BuildControls;