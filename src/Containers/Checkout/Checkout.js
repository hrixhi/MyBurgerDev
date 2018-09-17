import React, {Component} from 'react';
import CheckoutSummary from '../../Components/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    continue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    cancel = () => {
        this.props.history.goBack();
    }

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {

            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancel} continue={this.continue}/>
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (
                <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>
                )}/>
            </div>
        );
    }
}

export default Checkout;