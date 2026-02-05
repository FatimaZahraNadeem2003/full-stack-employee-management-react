import { createSlice } from "@reduxjs/toolkit";
import { HRAsyncReducer } from "../AsyncReducers/asyncreducer.js";
import { HandleGetAllLeaves, HandlePostLeaves, HandleUpdateLeaves, HandleDeleteLeaves } from "../Thunks/LeavesThunk.js";

const LeavesSlice = createSlice({
    name: "Leaves",
    initialState: {
        data: [],
        isLoading: false,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    extraReducers: (builder) => {
        HRAsyncReducer(builder, HandleGetAllLeaves);
        HRAsyncReducer(builder, HandlePostLeaves);
        HRAsyncReducer(builder, HandleUpdateLeaves);
        HRAsyncReducer(builder, HandleDeleteLeaves);
    }
});

export default LeavesSlice.reducer;