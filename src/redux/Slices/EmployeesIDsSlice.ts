import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { EmployeesIDsAsyncReducer } from "../AsyncReducers/asyncreducer"
import { fetchEmployeesIDs } from "../Thunks/EmployeesIDsThunk"

const EmployeesIDsSlice = createSlice({
    name: 'EmployeesIDs',
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
        EmployeesIDsAsyncReducer(builder, fetchEmployeesIDs);
    }
})

export default EmployeesIDsSlice.reducer