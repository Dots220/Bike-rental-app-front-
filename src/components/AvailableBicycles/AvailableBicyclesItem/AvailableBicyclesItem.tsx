import React from "react";
import classes from "../AvailableBicyclesItem/AvailableBicyclesItem.module.css"
import {Button} from "@material-ui/core";
import {useAppDispatch} from "../../../redux/hooks/hooks";
import {fetchDeleteBicycles} from "../../../redux/features/bicyclesSlice";

interface AvailableBicyclesItem {
    index: number
    name: string;
    type: string;
    cost: number;
    rent: () => void;
}

const AvailableBicyclesItem: React.FC<AvailableBicyclesItem> = ({index, name, type, cost, rent}) => {
    const dispatch = useAppDispatch()
    return (
        <div className={classes.availableBicycleBlock}>
            <div className={classes.yourRentInfo}>{name} / {type} / ${cost}</div>
            <div className={classes.buttonContainer}>
                <Button className={classes.rentButton} variant="contained" color="primary" size="small" onClick={rent}>
                    Rent
                </Button>
                <Button className={classes.deleteButton} variant="contained" color="primary" size="small"
                        onClick={() => dispatch(fetchDeleteBicycles(index))}>
                    Delete
                </Button>
            </div>

        </div>
    )
}

export default AvailableBicyclesItem