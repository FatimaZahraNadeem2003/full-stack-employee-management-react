import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints'

export const HandleGetAttendance = createAsyncThunk("handleGetEmployeeAttendance", async (AttendanceData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = AttendanceData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})