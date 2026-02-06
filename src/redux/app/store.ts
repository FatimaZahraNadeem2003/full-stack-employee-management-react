import { configureStore } from '@reduxjs/toolkit'
import EmployeeReducer from "../Slices/EmployeeSlice"
import HRReducer from '../Slices/HRSlice'
import DashbaordReducer from "../Slices/DashboardSlice"
import HREmployeesPageReducer from '../Slices/HREmployeesPageSlice'
import HRDepartmentPageReducer from '../Slices/HRDepartmentPageSlice'
import EMployeesIDReducer from '../Slices/EmployeesIDsSlice'
import LeavesReducer from '../Slices/LeavesSlice'
import SalaryReducer from '../Slices/SalarySlice'
import NoticeReducer from '../Slices/NoticeSlice'
import AttendanceReducer from '../Slices/AttendanceSlice'
import DepartmentReducer from '../Slices/DepartmentSlice'

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