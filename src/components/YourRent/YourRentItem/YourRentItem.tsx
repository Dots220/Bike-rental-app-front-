import React from "react";
import classes from "../YourRentItem/YourRentItem.module.css"
import {Button} from "@material-ui/core";
import {useAppDispatch} from "../../../redux/hooks/hooks";
import {fetchCancelRent} from "../../../redux/features/bicyclesSlice";

interface RentItemProps {
    index: number
    name: string;
    type: string;
    cost: number;
}

const RentItem: React.FC<RentItemProps> = ({index, name, type, cost}) => {
    const dispatch = useAppDispatch()
    return (
        <div className={classes.RentBlock}>
            <div className={classes.yourRentInfo}>{name} / {type} / ${cost}</div>
            <Button className={classes.cancelButton} variant="contained" color="primary" size="small"
                    onClick={() => dispatch(fetchCancelRent({id: index, rent: cost}))}>
                Cancel rent
            </Button>
        </div>
    )
}

export default RentItem