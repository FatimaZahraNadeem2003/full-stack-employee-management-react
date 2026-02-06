import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints'

export const HandleGetEmployeeNotices = createAsyncThunk("handleGetEmployeeNotices", async (NoticeData: any, { rejectWithValue }) => {
    try {
        const { apiroute } = NoticeData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error: any) { 
        return rejectWithValue(error.response.data);
    }
})