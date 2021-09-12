import {availableBicycles} from "../redux/features/bicyclesSlice";
import axios from 'axios'

class ApiServices {
    _apiUrl = 'http://localhost:5000'

    public async GetAvailableBicycles(): Promise<any> {
        return axios
            .get(`${this._apiUrl}/bicycle`)
            .then((res) => {
                return res.data
            })
    }

    public async GetRentBicycles(): Promise<any> {
        return axios
            .get(`${this._apiUrl}/rentBicycle`)
            .then((res) => {
                return res.data
            })
    }

    public async DeleteAvailableBicycles(id: number): Promise<any> {
        return axios
            .delete(`${this._apiUrl}/bicycle/${id}`)
            .then((res) => {
                return res.data
            })
    }

    public async CreateRentBicycles(id: number, body: { rentTime: string }): Promise<any> {
        return axios
            .post(`${this._apiUrl}/rentBicycle/${id}`, body)
            .then((res) => {
                return res.data
            })
    }

    public async CancelRent(id: number): Promise<any> {
        return axios
            .delete(`${this._apiUrl}/rentBicycle/${id}`)
            .then((res) => {
                return res.data
            })
    }

    public async CreateBicycles(body: { name: string, type: string, rent: number }): Promise<any> {
        return axios
            .post(`${this._apiUrl}/bicycle`, body)
            .then((res) => {
                return res.data
            })
    }


}

export default new ApiServices()