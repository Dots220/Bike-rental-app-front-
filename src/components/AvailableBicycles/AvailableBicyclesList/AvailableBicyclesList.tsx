import React from "react";
import classes from "../AvailableBicyclesList/AvailableBicyclesList.module.css"
import AvailableBicyclesItem from "../AvailableBicyclesItem/AvailableBicyclesItem";

interface AvailableBicyclesList {}

const AvailableBicyclesList: React.FC<AvailableBicyclesList> = () => {
    let RentArr = [1,2,3,5,6]
    return(
        <div className={classes.root}>
            <div className={classes.availableBicyclesTitle}>🚲 Available Bicycles({RentArr.length})</div>
            {RentArr.map((elem, index) => (
                <AvailableBicyclesItem/>
            ))}
        </div>
    )
}

export default AvailableBicyclesList