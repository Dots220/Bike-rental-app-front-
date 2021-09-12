import {Bicycles} from "../../type/bicycles";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import ApiService from "../../service/ApiService";

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

export const fetchBicycles = createAsyncThunk(
    'bicycles/fetchGet',
    async () => {
        const response = await ApiService.GetAvailableBicycles()
        return response
    }
)

export const fetchGetRentBicycles = createAsyncThunk(
    'rentBicycles/fetchGet',
    async () => {
        const response = await ApiService.GetRentBicycles()
        return response
    }
)

export const fetchDeleteBicycles = createAsyncThunk(
    'bicycles/fetchDelete',
    async (id: number) => {
        const response = await ApiService.DeleteAvailableBicycles(id)
        return id
    }
)

export const fetchRentBicycle = createAsyncThunk(
    'bicycles/fetchRent',
    async (props: { bicycle: Bicycles, rentTime: string }) => {
        await ApiService.CreateRentBicycles(props.bicycle.id, {rentTime: props.rentTime})
        console.log(props.bicycle)
        return props.bicycle
    }
)

export const fetchCancelRent = createAsyncThunk(
    'rentBicycles/fetchDelete',
    async (props: { id: number, rent: number }) => {
        await ApiService.CancelRent(props.id)
        return props
    }
)

export const fetchCreateBicycle = createAsyncThunk(
    'bicycles/fetchPost',
    async (bicycle: { name: string, type: string, rent: number }) => {
        let res = await ApiService.CreateBicycles(bicycle)
        return res
    }
)


export const bicycleSlice = createSlice({
    name: 'bicycle',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchBicycles.fulfilled, (state, action) => {
            state.availableBicycles = action.payload
        })

        builder.addCase(fetchDeleteBicycles.fulfilled, (state, action) => {
            state.availableBicycles = state.availableBicycles.filter((bicycle) => bicycle.id !== action.payload)
        })

        builder.addCase(fetchCancelRent.fulfilled, (state, action) => {
            let bicycle = state.rentBicycles.find((item) => item.id == action.payload.id)
            state.totalCostRent = state.totalCostRent - action.payload.rent
            // @ts-ignore
            state.availableBicycles.push(bicycle)
            state.rentBicycles = state.rentBicycles.filter((bicycle) => bicycle.id !== action.payload.id)
        })

        builder.addCase(fetchRentBicycle.fulfilled, (state, action) => {
            state.totalCostRent = state.totalCostRent + action.payload.rent
            state.availableBicycles = state.availableBicycles.filter((bicycle) => bicycle.id !== action.payload.id)
            state.rentBicycles.push(action.payload)
        })

        builder.addCase(fetchGetRentBicycles.fulfilled, (state, action) => {
            let arr = action.payload
            state.totalCostRent = arr.reduce((sum: number, elem: any) => sum + elem.rent, 0)
            state.rentBicycles = action.payload
        })

        builder.addCase(fetchCreateBicycle.fulfilled, (state, action) => {
            state.availableBicycles.push(action.payload)
        })

    },
})

export const availableBicycles = (state: RootState) => state.bicycle.availableBicycles
export const rentBicycles = (state: RootState) => state.bicycle.rentBicycles
export const totalCostRent = (state: RootState) => state.bicycle.totalCostRent

const bicycleReducer = bicycleSlice.reducer
export default bicycleReducer