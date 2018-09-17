import React, {Component} from 'react';
import Aux from '../../HOC/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        show: false
    }

    sideDrawerHandler = () => {
        this.setState({show: false});
    }

    toggled = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return(
            <Aux>
            <Toolbar toggled={this.toggled}/>
            <SideDrawer show={this.state.show} clicked={this.sideDrawerHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }

}

export default Layout;