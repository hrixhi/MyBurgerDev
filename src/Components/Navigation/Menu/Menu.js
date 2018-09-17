import React from 'react';
import classes from './Menu.css';

const Menu = (props) => {
    return(
        <div onClick={props.toggled} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Menu;