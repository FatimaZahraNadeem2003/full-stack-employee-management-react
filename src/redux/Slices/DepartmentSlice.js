import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    errorMessage: ""
}

export const DepartmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        setDepartmentData: (state, action) => {
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

export default DepartmentSlice.reducer
export const { setDepartmentData, setLoading, setError, setErrorMessage } = DepartmentSlice.actions