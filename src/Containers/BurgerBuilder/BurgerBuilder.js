import React, {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../BuildControls/BuildControls';
import Modal from './../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import axios from '../../AxiosOrder';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorHandler from '../../ErrorHandling';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0 
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<3) {
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchase(updatedIngredients);
        }
     
        }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if(oldCount>0) {
        let newCount = oldCount - 1;
        const updatedIngredients = {
           ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchase(updatedIngredients);
        }

    }

    updatePurchase = (temp) => {
       
        console.log(temp + "hrishi")
        const sum = Object.keys(temp).map(igKey => {
            return temp[igKey];
        }).reduce((sum,el) => {
            return sum + el;
        },0);

        this.setState({purchasable: sum > 0});

    }

    backdropClicked = () => {
        this.setState({purchasing: false});
    }

    continue = () => {
        //alert('You chose to continue!');
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice); 
        const queryString = queryParams.join('&');
        
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    render() {

        const disabledInfo =  {
            ...this.state.ingredients
        }

        let orderSummary = (<OrderSummary price={this.state.totalPrice} ingredients = {this.state.ingredients} clicked={this.backdropClicked} continue={this.continue}/>
        )

        if(this.state.loading) {
            orderSummary = <Spinner/>
        }

        for(let i in disabledInfo) {
            disabledInfo[i] = (disabledInfo[i] <= 0) 
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.backdropClicked}>
                {orderSummary}
                </Modal>
            <div><Burger ingredients={this.state.ingredients}/></div>
            <div><BuildControls showModal={this.purchaseHandler} purchasable={this.state.purchasable} price={this.state.totalPrice} add={this.addIngredientHandler} remove={this.removeIngredientHandler} disabled={disabledInfo}/></div>
            </Aux>
        
      );
    }

}

export default ErrorHandler(BurgerBuilder, axios);