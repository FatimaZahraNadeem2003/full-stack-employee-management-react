import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandleGetNotice } from "../Thunks/NoticeThunk"

const NoticeSlice = createSlice({
    name: 'Notice',
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
        AsyncReducer(builder, HandleGetNotice);
    }
})

export default NoticeSlice.reducer