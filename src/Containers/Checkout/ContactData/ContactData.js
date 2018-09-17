import React, {Component} from 'react';
import Button from '../../../UI/Button/Button';
import classes from '../ContactData/ContactData.css';
import axios from '../../../AxiosOrder';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';

class ContactData extends Component {

    state = {
        orderform: {
            name: '',
            email: '',
            street: '',
            zipCode: '',
            country: '',
            deliveryMethod: '' 
        },
        loading: false 
    }

    orderhandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Hrishi Vora',
                address: {
                    street: '325 W Adams Blvd.',
                    zip: '90007',
                    country: 'United States'
                },
                email: 'its.hrishi.vora@gmail.com'

            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false}) 
            this.props.history.push('/');
        }).catch(error => this.setState({loading: false}));
    }

    render() {

        console.log(this.props.ingredients)

        let form = (<form>
        <Input inputType="input" type="text" name="name" placeholder="Enter Name" />
        <Input inputType="input" type="email" name="email" placeholder="Enter Email" />
        <Input inputType="input" type="text" name="street" placeholder="Enter Street" />
        <Input inputType="input" type="text" name="postalcode" placeholder="Enter Postal Code" />
        <Button btnType="Success" clicked={this.orderhandler}>ORDER</Button>
        </form>)

            if(this.state.loading) {
                form = <Spinner/>
            }

        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        )
    }

}

export default ContactData;