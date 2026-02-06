import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HRDepartmentPageAsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetHRDepartments } from "../Thunks/HRDepartmentPageThunk"

const HRDepartmentPageSlice = createSlice({
    name: 'HRDepartmentPage',
    initialState: {
        data: null, 
        isLoading: false,
        isAuthenticated: false,
        isAuthourized: false,
        isResetPasswords: false,
        success: { status: false, message: null, content: null },
        fetchData: false,
        departmentData: null,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        HRDepartmentPageAsyncReducer(builder, HandleGetHRDepartments);
    }
})

export default HRDepartmentPageSlice.reducer