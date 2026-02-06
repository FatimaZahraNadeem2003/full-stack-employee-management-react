import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HREmployeesPageAsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetHREmployees } from "../Thunks/HREmployeesThunk"

const HREmployeesPageSlice = createSlice({
    name: 'HREmployeesPage',
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
        HREmployeesPageAsyncReducer(builder, HandleGetHREmployees);
    }
})

export default HREmployeesPageSlice.reducer