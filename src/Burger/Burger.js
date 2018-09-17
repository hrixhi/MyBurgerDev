import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {withRouter} from 'react-router-dom';

const Burger = (props) => {

    let dynamicIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map(
                (_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        }).reduce(((arr1, arr2) => {return arr1.concat(arr2)}), []);

    if(dynamicIngredients.length === 0) {
        dynamicIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
             <BurgerIngredient type="bread-top" />
            {dynamicIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(Burger);