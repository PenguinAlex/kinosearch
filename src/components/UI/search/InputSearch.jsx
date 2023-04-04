import React from 'react';
import classes from "./InputSearch.module.css";
const InputSearch = () => {
    return (
        <input type={"text"} className={classes.Search} value={''} placeholder="Search"/>
    );
};

export default InputSearch;