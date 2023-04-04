import React from 'react';
import classes from "./ListButton.module.css";

const ListButton = ({icon, value, setActiveList}) => {
    return (
        <button
            className={classes.listsButton}
            onClick={()=>setActiveList}
        >
            <img src={icon} alt={"aaa"}/>
            {value}
        </button>
    );
};

export default ListButton;