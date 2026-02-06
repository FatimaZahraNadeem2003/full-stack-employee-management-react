import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HRDashboardAsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetDashboard } from "../Thunks/DashboardThunk"

const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: null, 
        isLoading: false,
        isAuthenticated: false,
        isAuthourized: false,
        isResetPasswords: false,
        success: false,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        HRDashboardAsyncReducer(builder, HandleGetDashboard);
    }
})

export default DashboardSlice.reducer