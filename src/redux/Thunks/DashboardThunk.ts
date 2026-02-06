import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { DashboardEndPoints } from "../apis/APIsEndpoints";

export const HandleGetDashboard = createAsyncThunk("HandleGetDashboard", async (DashboardData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = DashboardData
        const response = await apiService.get(`${DashboardEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data); 
    }
})