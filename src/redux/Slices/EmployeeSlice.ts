import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandlePostEmployees, HandleGetEmployees, HandlePatchEmployees } from "../Thunks/EmployeeThunk"

const EmployeeSlice = createSlice({
    name: 'employees',
    initialState: {
        data: null, 
        isLoading: false,
        isAuthenticated: false,
        isAuthourized: false,
        isResetPasswords: false,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        AsyncReducer(builder, HandlePostEmployees); 
        AsyncReducer(builder, HandleGetEmployees);
        AsyncReducer(builder, HandlePatchEmployees);
    }
})

export default EmployeeSlice.reducer