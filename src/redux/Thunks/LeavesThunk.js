import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/apiService";
import { LeavesEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllLeaves = createAsyncThunk("HandleGetAllLeaves", async (leaveData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = leaveData;
        const response = await apiService.get(`${LeavesEndPoints[apiroute]}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const HandlePostLeaves = createAsyncThunk("HandlePostLeaves", async (leaveData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = leaveData;
        const response = await apiService.post(`${LeavesEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const HandleUpdateLeaves = createAsyncThunk("HandleUpdateLeaves", async (leaveData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = leaveData;
        const response = await apiService.patch(`${LeavesEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const HandleDeleteLeaves = createAsyncThunk("HandleDeleteLeaves", async (leaveData, { rejectWithValue }) => {
    try {
        const { apiroute, id } = leaveData;
        const response = await apiService.delete(`${LeavesEndPoints[apiroute]}/${id}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});