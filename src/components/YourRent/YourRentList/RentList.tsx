import React, {useEffect} from "react";
import classes from "./RentList.module.css";
import {Button} from "@material-ui/core";
import RentItem from "../YourRentItem/YourRentItem";
import {useAppSelector} from "../../../redux/hooks/hooks";
import {
    availableBicycles,
    fetchBicycles,
    fetchGetRentBicycles,
    fetchRentBicycle, rentBicycles, totalCostRent
} from "../../../redux/features/bicyclesSlice";
import {useDispatch} from "react-redux";

interface RentListProps {
}

const RentList: React.FC<RentListProps> = () => {
    const dispatch = useDispatch()
    const RentBicycle = useAppSelector(rentBicycles)
    const TotalCost = useAppSelector(totalCostRent)
    const getRentBicycleFunc = () => {
        dispatch(fetchGetRentBicycles())
    }

    useEffect(() => {
        getRentBicycleFunc()
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.yourRentTitle}>🤩 You rent (Total: ${TotalCost})</div>
            {RentBicycle.map((elem, index) => (
                <RentItem
                    index={elem.id}
                    name={elem.name}
                    type={elem.type}
                    cost={elem.rent}
                    key={elem.name + elem.id}
                />
            ))}
        </div>
    )
}

export default RentList