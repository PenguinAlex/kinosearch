import React from 'react';
import Watchlists from "./components/Watchlists";
import Main from "./components/Main";
import classes from "./App.module.css";
import homeIcon from "./icons/home.svg";
import historyIcon from "./icons/history.svg";

const [watchlists, setWatchlists] = [
    {
        id:1,
        value:"Home",
        icon: homeIcon,
        active: true,
        list: 'zaglushka'
    },
    {
        id:2,
        value:"History",
        icon: historyIcon,
        active: false,
        list: 'zaglushka'
    },
    {
        value:"Home",
        icon: homeIcon,
        active: true,
        list: 'zaglushka'
    },

]

const App = () => {
    return (
        <div className={classes.App}>
          <Watchlists/>
            <Main/>
        </div>
    );
};

export default App;