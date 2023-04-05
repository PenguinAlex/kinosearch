import React from 'react';
import InputSearch from "./UI/search/InputSearch";
import classes from "./Watchlists.module.css";
import ListButton from "./UI/ListButton/ListButton";
import homeIcon from '../icons/home.svg';
import historyIcon from '../icons/history.svg';
import CreateWatchlistButton from "./UI/CreateListButton/CreateWatchlistButton";



const Watchlists = ({lists, activeList, setLists, setActiveList}) => {//Забыл как избавиться от проброса колбеков :(
    return (
        <div className={classes.Watchlists}>
            <h1 className={classes.Watchlists_title}>Watchlists</h1>
            <InputSearch/>
            <ListButton value={'Home'} icon={homeIcon} activeList={activeList}/>
            <ListButton value={'History'} icon={historyIcon} activeList={activeList}/>
            <CreateWatchlistButton setLists={setLists}/>
            <hr className={classes.Watchlists_hr}/>
            {lists.map((list) =>{ //отрисовка списков пользователя
                return <ListButton key={Date.now()} value={list.value} icon={null} activeList={activeList}/>
            })}
        </div>
    );
};

export default Watchlists;