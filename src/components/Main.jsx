import React from 'react';
import classes from "./Main.module.css";
const Main = ({activeList}) => {
    return (
        <div className={classes.Main}>
            <a className={classes.Main_text}>{activeList}</a>
        </div>
    );
};

export default Main;