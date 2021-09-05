import React from "react";
import classes from "./RentList.module.css";
import {Button} from "@material-ui/core";
import RentItem from "../YourRentItem/YourRentItem";

interface RentListProps {}

const RentList: React.FC<RentListProps> = () => {
    let RentArr = [1,2,3,5,6]
    return(
    <div className={classes.root}>
        <div className={classes.yourRentTitle}>🤩 You rent (Total: ${ })</div>
        {RentArr.map((elem, index) => (
            <RentItem/>
        ))}
    </div>
    )
}

export default RentList