import { EmployeeDetailsDialogBox } from "./dialogboxes.jsx"
import { DeleteEmployeeDialogBox } from "./dialogboxes.jsx"
import { RemoveEmployeeFromDepartmentDialogBox } from "./dialogboxes.jsx"

export const ListWrapper = ({ children }) => {
    return (
        <div className={`wrapper-container p-2 border-2 border-blue-700 rounded-lg w-auto`}>
            {children}
        </div>
    )
}

export const HeadingBar = ({ table_layout, table_headings }) => {
    return (
        <div className={`heading-container grid min-[250px]:grid-cols-2 sm:${table_layout ? table_layout : `grid-cols-5`} rounded-lg gap-4 overflow-auto`}>
            {
                table_headings.map((item) => <div className={`heading-content text-white bg-blue-800 font-bold min-[250px]:text-xs xl:text-xl min-[250px]:p-1 sm:p-2 rounded-lg text-center flex justify-center items-center 
                ${(["Email", "Department", "Contact Number"].includes(item)) ? `min-[250px]:hidden sm:flex` : ""}`}>
                    {item}
                </div>)
            }
        </div>
    )
}

export const ListContainer = ({ children }) => {
    return (
        <div className={`list-item-container px-2 py-2 border-2 border-blue-700 rounded-lg w-auto`}>
            {children}
        </div>
    )
}

export const ListItems = ({ TargetedState }) => {
    return (
        <>
            {TargetedState.data ? TargetedState.data.map((item) => <div className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-5 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`}>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis">
                    {`${item.firstname} ${item.lastname}`}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                    {item.email}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                    {item.department ? item.department.name : "Not Specified"}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm  xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                    {item.contactnumber}
                </div>
                <div className="heading-content text-blue-800 font-bold min-[250px]:text-xs xl:text-lg p-2 rounded-lg text-center flex justify-center items-center min-[250px]:gap-1 xl:gap-2">
                    <EmployeeDetailsDialogBox EmployeeID={item._id} />
                    <DeleteEmployeeDialogBox EmployeeID={item._id} />
                </div>
            </div>) : null}
        </>
    )
}


export const DepartmentListItems = ({ TargetedState }) => {
    console.log("this is targeted state", TargetedState)
    return (
        <>
            {TargetedState ? TargetedState.employees.map((item) => <div className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-4 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`}>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    {`${item.firstname} ${item.lastname}`}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                    {item.email}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm  xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                    {item.contactnumber}
                </div>
                <div className="heading-content text-blue-800 font-bold min-[250px]:text-xs xl:text-lg p-2 rounded-lg text-center flex justify-center items-center min-[250px]:gap-1 xl:gap-2">
                    <RemoveEmployeeFromDepartmentDialogBox DepartmentName={TargetedState.name} DepartmentID={TargetedState._id} EmployeeID={item._id}/>
                </div>
            </div>) : null}
        </>
    )
}

export const LeaveListItems = ({ TargetedState }) => {
    return (
        <>
            {TargetedState.data && TargetedState.data.length > 0 ? TargetedState.data.map((item) => <div className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-6 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`}>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis">
                    {item.employee ? `${item.employee.firstname} ${item.employee.lastname}` : "Unknown Employee"}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    {new Date(item.startdate).toLocaleDateString()}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    {new Date(item.enddate).toLocaleDateString()}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    {item.title}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    {item.reason}
                </div>
                <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                    <span className={`px-2 py-1 rounded-full ${item.status === "approved" ? "bg-green-200 text-green-800" : item.status === "rejected" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"}`}>
                        {item.status || "pending"}
                    </span>
                </div>
            </div>) : 
            <div className="p-4 text-center text-gray-500">No leave requests found</div>}
        </>
    )
}