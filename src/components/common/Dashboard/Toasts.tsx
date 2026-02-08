import { useDispatch } from "react-redux"
import { HandleDeleteHREmployees } from "../../../redux/Thunks/HREmployeesThunk"
import { HandleDeleteHRDepartments } from "../../../redux/Thunks/HRDepartmentPageThunk"

export const AddEmployeesDialogBox = () => {
    return (
        <div>Add Employees Dialog</div>
    )
}

export const RemoveEmployeeFromDepartmentDialogBox = () => {
    const dispatch = useDispatch()

    // const RemoveEmployee = (EMID: string) => {
    //     dispatch(HandleDeleteHRDepartments({ apiroute: "DELETE", data: { departmentID: "", employeeIDArray: [EMID], action: "delete-employee" } }) as any)
    // }

    return (
        <div>Remove Employee Dialog</div>
    )

    return (
        <div>Remove Employee Dialog</div>
    )
}

export const DeleteEmployeeDialogBox = () => {
    const dispatch = useDispatch()
    // const DeleteEmployee = (EMID: string) => {
    //     dispatch(HandleDeleteHREmployees({ apiroute: `DELETE.${EMID}` }) as any)
    // }

    return (
        <div>Delete Employee Dialog</div>
    )
}