import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { LeavesEndPoints } from "../apis/APIsEndpoints";

export const HandleGetLeaves = createAsyncThunk("HandleGetAllLeaves", async (leaveData: any, { rejectWithValue }) => {
    try {
        console.log("Making API call to get all leaves...");
        const { apiroute } = leaveData;
        const response = await apiService.get(`${LeavesEndPoints[apiroute]}`, {
            withCredentials: true
        });
        console.log("API response:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Error fetching leaves:", error);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const HandlePostLeaves = createAsyncThunk("HandlePostLeaves", async (leaveData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data } = leaveData;
        const response = await apiService.post(`${LeavesEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const HandleUpdateLeaves = createAsyncThunk("HandleUpdateLeaves", async (leaveData: any, { rejectWithValue }) => {
    try {
        const { apiroute, data } = leaveData;
        const response = await apiService.patch(`${LeavesEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const HandleDeleteLeaves = createAsyncThunk("HandleDeleteLeaves", async (leaveData: any, { rejectWithValue }) => {
    try {
        const { apiroute, id } = leaveData;
        const response = await apiService.delete(`${LeavesEndPoints[apiroute]}/${id}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});