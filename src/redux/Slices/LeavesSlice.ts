import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LeavesAsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetLeaves } from "../Thunks/LeavesThunk"

const LeavesSlice = createSlice({
    name: 'Leaves',
    initialState: {
        data: null, 
        isLoading: false,
        isAuthenticated: false,
        isAuthourized: false,
        isResetPasswords: false,
        success: false,
        fetchData: false,
        employeeData: null,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        LeavesAsyncReducer(builder, HandleGetLeaves);
    }
})

export default LeavesSlice.reducer