import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetAttendance } from "../Thunks/AttendanceThunk"

const AttendanceSlice = createSlice({
    name: 'Attendance',
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
        AsyncReducer(builder, HandleGetAttendance);
    }
})

export default AttendanceSlice.reducer