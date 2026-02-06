import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { EmployeesIDsEndPoints } from "../apis/APIsEndpoints";

export const fetchEmployeesIDs = createAsyncThunk("fetchEmployeesIDs", async (fetchdata: any, { rejectWithValue }) => {
    try {
        const { apiroute } = fetchdata
        const response = await apiService.get(`${EmployeesIDsEndPoints[apiroute]}`, {
            withCredentials: true
        })
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})