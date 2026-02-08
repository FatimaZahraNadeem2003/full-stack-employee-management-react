import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints'

export const HandleGetSalary = createAsyncThunk("handleGetEmployeeSalary", async (SalaryData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = SalaryData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})