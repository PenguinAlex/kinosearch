import React, {useState} from 'react';
import Watchlists from "./components/Watchlists";
import Main from "./components/Main";
import classes from "./App.module.css";


const App = () => {
    const [activeList, setActiveList] = useState('Home');//активный список(просматриваемый)
    const [lists, setLists] = useState([ //список листов пользователя
        {
            id: Date.now(),
            value:'MyList',
            films:[]
        },
        {
            id: Date.now(),
            value:'MyList',
            films:[]
        },
        {
            id: Date.now(),
            value:'MyList',
            films:[]
        },
    ])

    return (
        <div className={classes.App}>
          <Watchlists
              activeList={activeList}
              setActiveList={setActiveList}
              lists={lists}
              setLists={setLists}
          />
            <Main activeList={activeList}/>
        </div>
    );
};

export default App;