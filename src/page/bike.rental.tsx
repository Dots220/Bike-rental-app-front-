import classes from "./bikeRental.module.css";
import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import RentList from "../components/YourRent/YourRentList/RentList";
import AvailableBicyclesList from "../components/AvailableBicycles/AvailableBicyclesList/AvailableBicyclesList";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../redux/hooks/hooks";
import {fetchCreateBicycle} from "../redux/features/bicyclesSlice";

function BikeRental() {

    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('')
    const [rent, setRent] = useState<string>('')
    const [type, setType] = useState<string>('')

    const createBicycle = () => {
        let rentProps = Number(rent)
        dispatch(fetchCreateBicycle({name, type, rent: rentProps}))
    }

    const typeChange = (event: any) => {
        setType(event.target.value);
    };

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>

                <div className={classes.head}>Awesome Bike Rental</div>

                <div className={classes.newRentContainer}>
                    <div className={classes.newRentTitle}>🤑 Create new rent</div>
                    <div className={classes.newRentBlock}>

                        <TextField className={classes.bikeName} id="filled-search" label="Bike Name" type="search"
                                   variant="filled" onChange={(event) => setName(event.target.value)}/>

                        <FormControl variant="outlined" className={classes.bikeType}>
                            <InputLabel id="demo-simple-select-outlined-label">Bike Type</InputLabel>
                            <Select
                                value={type}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={typeChange}

                            >
                                <MenuItem value="">
                                    <em>Bike Type</em>
                                </MenuItem>
                                <MenuItem value={"Custom"}>Custom</MenuItem>
                                <MenuItem value={"Mountain"}>Mountain</MenuItem>
                                <MenuItem value={"Road"}>Road</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField className={classes.rentPrice} id="filled-search" label="Bike Rent" type="search"
                                   variant="filled" defaultValue={0.0}
                                   onChange={(event) => setRent(event.target.value)}/>

                        <Button className={classes.rentButton} variant="contained" color="primary" size="small"
                                onClick={createBicycle}
                        >
                            Submit rent
                        </Button>
                    </div>
                </div>

                <RentList/>

                <AvailableBicyclesList/>

            </div>

        </div>
    )
}

export default BikeRental