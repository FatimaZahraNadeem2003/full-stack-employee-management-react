import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    errorMessage: ""
}

export const SalarySlice = createSlice({
    name: "salary",
    initialState,
    reducers: {
        setSalaryData: (state, action) => {
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

export default SalarySlice.reducer
export const { setSalaryData, setLoading, setError, setErrorMessage } = SalarySlice.actions