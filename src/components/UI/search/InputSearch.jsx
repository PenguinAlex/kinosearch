import React from 'react';
import classes from "./InputSearch.module.css";
const InputSearch = () => {
    return (
        <input type={"text"} className={classes.search} value={''} placeholder="Search"/>
    );
};

export default InputSearch;