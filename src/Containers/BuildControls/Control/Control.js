import React from 'react';
import classes from './Control.css';

const Control = (props) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.remove} disabled={props.disabled}> less </button>
            <button className={classes.More} onClick={props.add}> more </button>
        </div>
    );

};

export default Control;