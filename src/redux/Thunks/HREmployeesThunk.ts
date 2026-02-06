import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { HREmployeesPageEndPoints } from '../apis/APIsEndpoints'

export const HandleGetHREmployees = createAsyncThunk("handleGetHREmployees", async (HREmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData
        const response = await apiService.get(`${HREmployeesPageEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})

export const HandlePostHREmployees = createAsyncThunk("HandlePostHREmployees", async (HREmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HREmployeeData
        const response = await apiService.post(`${HREmployeesPageEndPoints[apiroute]}`, data, {
            withCredentials: true
        })
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})

export const HandleDeleteHREmployees = createAsyncThunk("HandleDeleteHREmployees", async (HREmployeeData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData
        const response = await apiService.post(`${HREmployeesPageEndPoints[apiroute]}`, {}, {
            withCredentials: true
        })
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})