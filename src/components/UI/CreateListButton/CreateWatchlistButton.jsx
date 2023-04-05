import React from 'react';
import classes from "./CreateWatchlistButton.module.css";

const CreateWatchlistButton = ({setLists}) => {
	return (
		<button className={classes.CreateWatchlistButton}>
			+ Create Watchlist
		</button>
	);
};

export default CreateWatchlistButton;