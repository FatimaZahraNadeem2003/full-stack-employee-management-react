import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HRAsyncReducer } from "../AsyncReducers/asyncreducer"
import { HandlePostHumanResources, HandleGetHumanResources } from "../Thunks/HRThunk"

const HRSlice = createSlice({
    name: 'HR',
    initialState: {
        data: null, 
        isLoading: false,
        isAuthenticated: false,
        isAuthourized: false,
        isVerified: false,
        isVerifiedEmailAvailable: false,
        isSignUp: false,
        isResetPassword: false,
        HRID: null,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        HRAsyncReducer(builder, HandlePostHumanResources); 
        HRAsyncReducer(builder, HandleGetHumanResources);
    }
})

export default HRSlice.reducer