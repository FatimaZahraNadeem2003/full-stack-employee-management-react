import { createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";

// Define a generic type for our state
interface BaseState {
    isLoading: boolean;
    error: {
        status: boolean;
        message: string | null;
        content: any;
    };
    data: any;
    isAuthenticated: boolean;
    isResetPasswords: boolean;
}

interface EmployeeState extends BaseState {
    isAuthourized: boolean;
    isVerified?: boolean;
    isVerifiedEmailAvailable?: boolean;
    isSignUp?: boolean;
    isResetPassword?: boolean;
    HRID?: string | null;
    success?: any;
    fetchData?: boolean;
    employeeData?: any;
    departmentData?: any;
}

// Define the payload type
interface ActionPayload {
    type?: string;
    success?: boolean;
    resetpassword?: boolean;
    gologin?: boolean;
    HRID?: string;
    alreadyverified?: boolean;
    data?: any;
    message?: string;
    typeOfAction?: string;
}

export const AsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            const payload: ActionPayload = action.payload || {};
            state.isLoading = false;
            state.error.status = false;
            
            // Check if this is a profile update action
            if (action.type.includes('HandlePatchEmployees')) {
                // If it's an update action, merge the updated data with existing data
                if (payload.success && payload.data) {
                    // Update the existing data with the new values
                    state.data = { ...state.data, ...payload.data };
                }
            } else {
                // For other actions, use the original behavior
                state.data = payload;
                
                if (payload.resetpassword) {
                    state.isAuthenticated = false;
                    state.isResetPasswords = payload.success || false;
                }
                else {
                    state.isAuthenticated = payload.success || false;
                }
            }
        })
        .addCase(thunk.rejected, (state, action) => {
            const payload: ActionPayload = action.payload || {};
            if (payload.gologin) {
                state.isLoading = false;
                state.error.status = false;
                state.error.message = payload.message || null;
                state.error.content = payload;
            }
            else {
                state.isLoading = false;
                state.error.status = true;
                state.error.message = payload.message || null;
                state.error.content = payload;
            }
        });
};

export const HRAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            const payload: ActionPayload = action.payload || {};
            if (payload.type == "signup") {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = true;
                state.isAuthourized = true;
                state.isVerified = true;
                state.isVerifiedEmailAvailable = true;
                state.error.status = false;
                state.data = payload;
            }
            if ((payload.type == "checkHR") || (payload.type == "HRLogin") || (payload.type == "HRforgotpassword")) {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = true;
                state.isAuthourized = true;
                state.HRID = payload.HRID || null;
                state.error.status = false;
                state.data = payload;
            }
            if (payload.type == "HRverifyemail") {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = true;
                state.isAuthourized = true;
                state.isVerifiedEmailAvailable = false;
                state.isVerified = true;
                state.error.status = false;
                state.data = payload;
            }
            if (payload.type == "HRcodeavailable") {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = true;
                if (payload.alreadyverified) {
                    state.isVerified = true;
                }
                else {
                    state.isVerified = false;
                }
                state.isVerifiedEmailAvailable = true;
                state.error.status = false;
                state.data = payload;
            }
            if (payload.resetpassword) {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = false;
                state.isResetPassword = true;
                state.error.status = false;
                state.data = payload;
            }
            if (payload.type == "HRResendVerifyEmail") {
                state.isSignUp = true;
                state.isLoading = false;
                state.isAuthenticated = true;
                state.isVerifiedEmailAvailable = true;
                state.error.status = false;
                state.data = payload;
            }
            if (payload.data && Array.isArray(payload.data)) {
                state.isLoading = false;
                state.error.status = false;
                state.data = payload.data;
            }
        })
        .addCase(thunk.rejected, (state, action) => {
            const payload: ActionPayload = action.payload || {};
            if (payload.type == "signup") {
                state.isSignUp = false;
                state.isLoading = false;
                state.error.status = true;
                state.error.message = payload.message || null;
                state.error.content = payload;
            }
            if (payload.type == "HRcodeavailable") {
                state.isLoading = false;
                state.isVerified = false;
                state.isVerifiedEmailAvailable = false;
                state.error.status = false;
                state.error.content = payload;
            }
            if (payload.gologin) {
                state.isSignUp = false;
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error.status = false;
                state.error.message = payload.message || null;
                state.error.content = payload;
            }
            else {
                state.isLoading = false;
                state.error.status = true;
                state.error.message = payload.message || null;
                state.error.content = payload;
            }
        });
}

export const HRDashboardAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
        state.error.content = null;
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = false;
        state.data = payload.data;
        state.success = payload.success;
    })
    builder.addCase(thunk.rejected, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = true;
        state.error.message = payload.message || null;
        state.error.content = payload;
    })
}

export const HREmployeesPageAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
        state.error.content = null;
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        if (payload.type === "AllEmployees") {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.data = payload.data;
            state.success = payload.success;
            state.fetchData = false;
        }
        else if (payload.type === "EmployeeCreate" || payload.type === "EmployeeDelete") {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.data = payload.data;
            state.success = payload.success;
            state.fetchData = true;
        }
        else if (payload.type === "GetEmployee") {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.employeeData = payload.data;
        }
    })
    builder.addCase(thunk.rejected, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        console.log(action);
        state.isLoading = false;
        state.error.status = true;
        state.error.message = payload.message || null;
        state.success = payload.success;
        state.error.content = payload;
    })
}

export const HRDepartmentPageAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
        state.error.content = null;
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        if (payload.type === "AllDepartments") {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.data = payload.data;
            state.fetchData = false;
            state.success = { status: false, message: null, content: null };
        }
        else if (payload.type === "CreateDepartment" || 
            payload.type === "DepartmentDelete" || 
            payload.type === "DepartmentEMUpdate" || 
            payload.type === "RemoveEmployeeDE") 
            {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.success = { status: payload.success, message: payload.message, content: payload };
            state.fetchData = true;
        }
        else if (payload.type === "GetDepartment") {
            state.isLoading = false;
            state.error.status = false;
            state.error.message = null;
            state.error.content = null;
            state.departmentData = payload.data;
        }
    })
    builder.addCase(thunk.rejected, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = true;
        state.error.message = payload.message || null;
        state.success = payload.success;
        state.error.content = payload;
    })
}

export const EmployeesIDsAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
        state.error.content = null;
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.message = null;
        state.error.content = null;
        state.error.status = false;
        state.data = payload.data;
    })
    builder.addCase(thunk.rejected, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = true;
        state.error.message = payload.message || null;
        state.error.content = payload;
    })
}

export const LeavesAsyncReducer = (builder: ActionReducerMapBuilder<EmployeeState>, thunk: ReturnType<typeof createAsyncThunk>) => {
    builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
        state.error.content = null;
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = false;
        state.data = payload.data || payload;
        console.log("Leaves data set:", payload.data || payload);
    })
    builder.addCase(thunk.rejected, (state, action) => {
        const payload: ActionPayload = action.payload || {};
        state.isLoading = false;
        state.error.status = true;
        state.error.message = payload.message || null;
        state.error.content = payload;
        console.error("Leaves error:", payload);
    })
}