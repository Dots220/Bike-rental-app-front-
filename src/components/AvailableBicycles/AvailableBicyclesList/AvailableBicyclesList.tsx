import React, {useEffect, useState} from "react";
import classes from "../AvailableBicyclesList/AvailableBicyclesList.module.css"
import AvailableBicyclesItem from "../AvailableBicyclesItem/AvailableBicyclesItem";
import {useDispatch, useSelector} from "react-redux";
import {availableBicycles, fetchBicycles} from "../../../redux/features/bicyclesSlice";
import {useAppSelector} from "../../../redux/hooks/hooks";
import Modal from "../../Modal/Modal";
import {Bicycles} from "../../../type/bicycles";

interface AvailableBicyclesList {
}

const AvailableBicyclesList: React.FC<AvailableBicyclesList> = () => {
    const Bicycle = useAppSelector(availableBicycles)
    const dispatch = useDispatch()

    const getBicycleFunc = () => {
        dispatch(fetchBicycles())
    }

    useEffect(() => {
        getBicycleFunc()
    }, [])

    const [modal, setModal] = useState(false)
    const [bicycle, setBicycle] = useState<Bicycles>({
        id: 0,
        name: "",
        type: "Custom",
        rent: 0
    })

    const showModal = () => {
        setModal(true)
    }

    return (
        <div className={classes.root}>
            <Modal
                open={modal}
                bicycle={bicycle}
                handleClose={() => setModal(false)}

            />
            <div className={classes.availableBicyclesTitle}>🚲 Available Bicycles({Bicycle.length})</div>
            {Bicycle.map((elem, index) => (
                <AvailableBicyclesItem
                    rent={() => {
                        showModal(),
                            setBicycle(elem)
                    }}
                    key={elem.name + elem.id}
                    index={elem.id}
                    name={elem.name}
                    type={elem.type}
                    cost={elem.rent}
                />
            ))}
        </div>
    )
}

export default AvailableBicyclesList