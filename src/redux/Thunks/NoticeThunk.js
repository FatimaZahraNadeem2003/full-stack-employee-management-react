import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/apiService'
import { APIsEndPoints } from '../apis/APIsEndpoints.js'


export const HandleGetEmployeeNotices = createAsyncThunk("handleGetEmployeeNotices", async (NoticeData, { rejectWithValue }) => {
    try {
        const { apiroute } = NoticeData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error) { 
        return rejectWithValue(error.response.data);
    }
})