import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetDepartment } from "../Thunks/DepartmentThunk"

const DepartmentSlice = createSlice({
    name: 'Department',
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
        AsyncReducer(builder, HandleGetDepartment);
    }
})

export default DepartmentSlice.reducer