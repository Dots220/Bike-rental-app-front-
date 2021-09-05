import React from "react";
import classes from "../AvailableBicyclesItem/AvailableBicyclesItem.module.css"
import {Button} from "@material-ui/core";

interface AvailableBicyclesItem {}

const AvailableBicyclesItem: React.FC<AvailableBicyclesItem> = () => {
    return(
        <div className={classes.availableBicycleBlock}>
            <div className={classes.yourRentInfo}>{} / {} / ${}</div>
            <div className={classes.buttonContainer}>
                <Button className={classes.rentButton} variant="contained" color="primary" size="small">
                    Rent
                </Button>
                <Button className={classes.deleteButton} variant="contained" color="primary" size="small">
                    Delete
                </Button>
            </div>

        </div>
    )
}

export default AvailableBicyclesItem