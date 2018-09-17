import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../UI/Logo/Logo';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
            <NavigationItems/>
            </nav>
        </div>
        </Aux>
    ); 
};

export default SideDrawer; 