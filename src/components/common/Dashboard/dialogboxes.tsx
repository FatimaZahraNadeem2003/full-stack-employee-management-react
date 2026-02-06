import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { CommonStateHandler } from "../../../utils/commonhandler"
import { useSelector } from "react-redux"

interface AddEmployeesDialogBoxProps {
    DepartmentID?: string
    DepartmentName?: string
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

    const SubmitFormData = () => {
        // Implement form submission logic
    }

    const [HREmployeesStateError, setHREmployeesStateError] = useState<any>(null)

    useEffect(() => {
        setHREmployeesStateError(HREmployeesState)
    }, [HREmployeesState])

    return (
        <div className="add-employees-dialog-container">
            <Dialog>
                <DialogTrigger className="bg-blue-800 border-2 border-blue-800 px-4 py-2 text-white font-bold rounded-lg hover:bg-white hover:text-blue-800">
                    Add Employee
                </DialogTrigger>
                <DialogContent className="max-w-[315px] lg:max-w-[35vw] 2xl:max-w-[30vw]">
                    <DialogHeader>
                        <DialogTitle>Add Employee</DialogTitle>
                        <DialogDescription>
                            Fill in the details of the employee to add them to the system.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="firstname" className="text-right">
                                First Name
                            </label>
                            <input
                                id="firstname"
                                name="firstname"
                                value={formdata.firstname}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="lastname" className="text-right">
                                Last Name
                            </label>
                            <input
                                id="lastname"
                                name="lastname"
                                value={formdata.lastname}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="email" className="text-right">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={formdata.email}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="contactnumber" className="text-right">
                                Contact
                            </label>
                            <input
                                id="contactnumber"
                                name="contactnumber"
                                value={formdata.contactnumber}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="password" className="text-right">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formdata.password}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="textpassword" className="text-right">
                                Confirm
                            </label>
                            <input
                                id="textpassword"
                                name="textpassword"
                                type="password"
                                value={formdata.textpassword}
                                onChange={handleformchange}
                                className="col-span-3 border rounded px-2 py-1"
                            />
                        </div>
                    </div>
                    <DialogClose asChild>
                        <Button 
                            onClick={SubmitFormData}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Add Employee
                        </Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    )
}