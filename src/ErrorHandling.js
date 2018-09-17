import React, {Component} from 'react';
import Modal from './UI/Modal/Modal';
import Aux from './HOC/Aux';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            });

            axios.interceptors.response.use(res => res, error=> {
                this.setState({error: error})
            });

        }

        state = {
            error: null
        }

        errorConfirmed = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} clicked={this.errorConfirmed}>
                    {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default ErrorHandler;