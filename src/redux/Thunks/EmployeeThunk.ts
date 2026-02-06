import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints'

export const HandleGetEmployees = createAsyncThunk("handleGetEmployees", async (EmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = EmployeeData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})

export const HandlePostEmployees = createAsyncThunk("HandlePostEmployees", async (EmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data, type } = EmployeeData
        if (type == "resetpassword") {
            const response = await apiService.post(`${APIsEndPoints.RESET_PASSWORD(apiroute)}`, data, {
                withCredentials: true
            })
            return response.data
        }
        else {
            const response = await apiService.post(`${APIsEndPoints[apiroute]}`, data, {
                withCredentials: true
            })
            return response.data
        }
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})

export const HandlePatchEmployees = createAsyncThunk("HandlePatchEmployees", async (EmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data } = EmployeeData;
        const response = await apiService.patch(`${APIsEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const HandlePutEmployees = createAsyncThunk("HandlePutEmployees", async () => {})

export const HandleDeleteEmployees = createAsyncThunk("HandleDeleteEmployees", async () => {})