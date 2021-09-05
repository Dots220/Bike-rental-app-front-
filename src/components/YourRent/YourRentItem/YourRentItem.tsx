import React from "react";
import classes from "../YourRentItem/YourRentItem.module.css"
import {Button} from "@material-ui/core";

interface RentItemProps {}

const RentItem: React.FC<RentItemProps> = () => {
    return(
        <div className={classes.RentBlock}>
            <div className={classes.yourRentInfo}>{} / {} / ${}</div>
            <Button className={classes.cancelButton} variant="contained" color="primary" size="small">
                Cancel rent
            </Button>
        </div>
    )
}

export default RentItem