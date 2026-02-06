import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints'

export const HandleGetEmployeeDepartment = createAsyncThunk("handleGetEmployeeDepartment", async (DepartmentData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = DepartmentData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})