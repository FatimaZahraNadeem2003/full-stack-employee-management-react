import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetSalary } from "../Thunks/SalaryThunk"

const SalarySlice = createSlice({
    name: 'Salary',
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
        AsyncReducer(builder, HandleGetSalary);
    }
})

export default SalarySlice.reducer