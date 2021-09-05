import React from "react";
import classes from "./RentList.module.css";
import {Button} from "@material-ui/core";

interface RentListProps {}

const RentList: React.FC<RentListProps> = () => {
    return(
    <div className={classes.yourRentContainer}>
        <div className={classes.yourRentTitle}>🤩 You rent (Total: ${ })</div>
        <div className={classes.yourRentBlock}>
            <div className={classes.yourRentInfo}>{} / {} / ${}</div>
            <Button className={classes.cancelButton} variant="contained" color="primary" size="small">
                Cancel rent
            </Button>
        </div>
    </div>
    )
}

export default RentList