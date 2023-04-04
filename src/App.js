import React from 'react';
import Watchlists from "./components/Watchlists";
import Main from "./components/Main";
import classes from "./App.module.css";

const App = () => {
    return (
        <div className={classes.App}>
          <Watchlists/>
            <Main/>
        </div>
    );
};

export default App;