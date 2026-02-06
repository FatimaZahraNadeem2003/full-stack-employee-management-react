import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/apiService'
import { APIsEndPoints } from '../apis/APIsEndpoints.js'


export const HandleGetEmployeeAttendance = createAsyncThunk("handleGetEmployeeAttendance", async (AttendanceData, { rejectWithValue }) => {
    try {
        const { apiroute } = AttendanceData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error) { 
        return rejectWithValue(error.response.data);
    }
})