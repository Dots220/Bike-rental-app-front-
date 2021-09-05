import {Bicycles} from "../../type/bicycles";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface bicyclesState {
    availableBicycles: Bicycles[],
    rentBicycles: Bicycles[],
    totalCostRent: number,
}

const initialState: bicyclesState = {
    availableBicycles: [],
    rentBicycles: [],
    totalCostRent: 0

} as bicyclesState

export const bicycleSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setBicycles: (state: bicyclesState, action) => {

        }

    },
})