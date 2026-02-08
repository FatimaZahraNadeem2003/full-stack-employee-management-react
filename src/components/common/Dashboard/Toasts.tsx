import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ErrorPopup } from "../error-popup"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { CommonStateHandler } from "../../../utils/commonhandler"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../loading.tsx"
import { HandleDeleteHREmployees } from "../../../redux/Thunks/HREmployeesThunk"
import { HandlePostHRDepartments, HandlePatchHRDepartments, HandleDeleteHRDepartments } from "../../../redux/Thunks/HRDepartmentPageThunk"
import { useToast } from "../../../hooks/use-toast"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { fetchEmployeesIDs } from "../../../redux/Thunks/EmployeesIDsThunk"

interface AddEmployeesDialogBoxProps {
    DepartmentID: string
    DepartmentName: string
}

interface RemoveEmployeeFromDepartmentDialogBoxProps {
    DepartmentName: string
    DepartmentID: string
    EmployeeID: string
}

interface DeleteEmployeeDialogBoxProps {
    EmployeeID: string
}

export const AddEmployeesDialogBox = ({ DepartmentID, DepartmentName }: AddEmployeesDialogBoxProps) => {
    const HREmployeesState = useSelector((state: any) => state.HREmployeesPageReducer)
    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        textpassword: "",
        password: "",
    })

    const handleformchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        CommonStateHandler(formdata, setformdata, event)
    }

    return (
        <div>Add Employees Dialog</div>
    )
}

export const RemoveEmployeeFromDepartmentDialogBox = ({ DepartmentName, DepartmentID, EmployeeID }: RemoveEmployeeFromDepartmentDialogBoxProps) => {
    const dispatch = useDispatch()

    const RemoveEmployee = (EMID: string) => {
        dispatch(HandleDeleteHRDepartments({ apiroute: "DELETE", data: { departmentID: DepartmentID, employeeIDArray: [EMID], action: "delete-employee" } }))
    }

    return (
        <div>Remove Employee Dialog</div>
    )
}

export const DeleteEmployeeDialogBox = ({ EmployeeID }: DeleteEmployeeDialogBoxProps) => {
    const dispatch = useDispatch()
    const DeleteEmployee = (EMID: string) => {
        dispatch(HandleDeleteHREmployees({ apiroute: `DELETE.${EMID}` }))
    }
    return (
        <div>Delete Employee Dialog</div>
    )
}