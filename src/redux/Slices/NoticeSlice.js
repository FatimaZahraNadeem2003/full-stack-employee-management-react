import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    errorMessage: ""
}

export const NoticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
        setNoticeData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Add any extra reducers here if needed
    }
})

export default NoticeSlice.reducer
export const { setNoticeData, setLoading, setError, setErrorMessage } = NoticeSlice.actions