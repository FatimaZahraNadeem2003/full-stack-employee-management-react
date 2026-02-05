import { createSlice } from "@reduxjs/toolkit";
import { LeavesAsyncReducer } from "../AsyncReducers/asyncreducer.js";
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
        LeavesAsyncReducer(builder, HandleGetAllLeaves);
        LeavesAsyncReducer(builder, HandlePostLeaves);
        LeavesAsyncReducer(builder, HandleUpdateLeaves);
        LeavesAsyncReducer(builder, HandleDeleteLeaves);
    }
});

export default LeavesSlice.reducer;