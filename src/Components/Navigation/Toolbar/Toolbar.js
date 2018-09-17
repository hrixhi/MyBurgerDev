import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Menu/Menu';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Menu toggled={props.toggled}/>
            <Logo height="80%"/>
            <nav className={classes.DesktopOnly}>
            <NavigationItems/>
            </nav>
        </header>

    ); 
};

export default Toolbar; 