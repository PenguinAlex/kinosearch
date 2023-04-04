import React from 'react';
import InputSearch from "./UI/search/InputSearch";
import classes from "./Watchlists.module.css";
import ListButton from "./UI/ListButton/ListButton";
import homeIcon from './UI/icons/home.svg'

const Watchlists = ({lists}) => {
    return (
        <div className={classes.Watchlists}>
            <h1 className={classes.Watchlists_title}>Watchlists</h1>
            <InputSearch/>
            <ListButton value={'qwerty'} icon={homeIcon}/>
        </div>
    );
};

export default Watchlists;