import classes from "./bikeRental.module.css";
import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import RentList from "../components/YourRent/YourRentList/RentList";

function BikeRental() {
    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>

                <div className={classes.head}>Awesome Bike Rental</div>

                <div className={classes.newRentContainer}>
                    <div className={classes.newRentTitle}>🤑 Create new rent</div>
                    <div className={classes.newRentBlock}>

                            <TextField className={classes.bikeName} id="filled-search" label="Bike Name" type="search" variant="filled"  />

                            <FormControl variant="outlined" className={classes.bikeType} >
                                <InputLabel id="demo-simple-select-outlined-label">Bike Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"

                                >
                                    <MenuItem value="">
                                        <em>Bike Type</em>
                                    </MenuItem>
                                    <MenuItem value={"Custom"}>Custom</MenuItem>
                                    <MenuItem value={"Mountain"}>Mountain</MenuItem>
                                    <MenuItem value={"Road"}>Road</MenuItem>
                                </Select>
                            </FormControl>

                        <TextField className={classes.rentPrice} id="filled-search" label="Bike Rent" type="search" variant="filled" defaultValue={0.0} />

                        <Button className={classes.rentButton} variant="contained" color="primary" size="small">
                            Submit rent
                        </Button>
                    </div>
                </div>

                <RentList/>

            </div>

        </div>
    )
}

export default BikeRental