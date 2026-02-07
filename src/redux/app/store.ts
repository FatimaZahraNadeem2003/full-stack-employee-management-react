import { configureStore } from '@reduxjs/toolkit'
import EmployeeReducer from "../Slices/EmployeeSlice"
import HRReducer from '../Slices/HRSlice.ts'
import DashbaordReducer from "../Slices/DashboardSlice.ts"
import HREmployeesPageReducer from '../Slices/HREmployeesPageSlice.ts'
import HRDepartmentPageReducer from '../Slices/HRDepartmentPageSlice.ts'
import EMployeesIDReducer from '../Slices/EmployeesIDsSlice.ts'
import LeavesReducer from '../Slices/LeavesSlice.ts'
import SalaryReducer from '../Slices/SalarySlice.ts'
import NoticeReducer from '../Slices/NoticeSlice.ts'
import AttendanceReducer from '../Slices/AttendanceSlice.ts'
import DepartmentReducer from '../Slices/DepartmentSlice.ts'

export const store = configureStore({
    reducer: {
        employeereducer: EmployeeReducer,
        HRReducer: HRReducer,
        dashboardreducer: DashbaordReducer,
        HREmployeesPageReducer : HREmployeesPageReducer,
        HRDepartmentPageReducer : HRDepartmentPageReducer,
        EMployeesIDReducer : EMployeesIDReducer,
        LeavesReducer : LeavesReducer,
        SalaryReducer: SalaryReducer,
        NoticeReducer: NoticeReducer,
        AttendanceReducer: AttendanceReducer,
        DepartmentReducer: DepartmentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch