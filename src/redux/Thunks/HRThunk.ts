import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { HREndPoints } from '../apis/APIsEndpoints'

export const HandleGetHumanResources = createAsyncThunk("handleGetHumanResources", async (HRData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = HRData
        const response = await apiService.get(`${HREndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})

export const HandlePostHumanResources = createAsyncThunk("HandlePostHumanResources", async (HRData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data, type } = HRData
        if (type == "resetpassword") {
            const response = await apiService.post(`${HREndPoints.RESET_PASSWORD(apiroute)}`, data, {
                withCredentials: true
            })
            return response.data
        }
        else {
            const response = await apiService.post(`${HREndPoints[apiroute]}`, data, {
                withCredentials: true
            })
            return response.data
        }
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})

export const HandlePutHumanResources = createAsyncThunk("HandlePutHumanResources", async () => {})

export const HandleDeleteHumanResources = createAsyncThunk("HandleDeleteHumanResources", async () => {})