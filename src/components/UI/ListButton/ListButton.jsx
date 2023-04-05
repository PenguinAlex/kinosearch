import React from 'react';
import classes from "./ListButton.module.css";

const ListButton = ({icon, value, setActiveList, activeList}) => {
    return (
        <button
            style={activeList!==value?{}:{ "background": "rgba(255, 255, 255, 0.1)"}}
            className={classes.ListsButton}
            onClick={()=>setActiveList(value)}
        >
            {icon!==null?<img src={icon} alt={"aaa"}/>:null}
            <a className={icon!==null?classes.ListsButton_text:classes.ListsButton_customText}>{value}</a>
        </button>
    );
};

export default ListButton;