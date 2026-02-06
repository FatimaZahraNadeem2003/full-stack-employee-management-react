import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployeeAttendance } from "../../../redux/Thunks/AttendanceThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const EmployeeAttendancePage = () => {
    const dispatch = useDispatch();
    const attendanceState = useSelector((state) => state.AttendanceReducer);
    const table_headings = ["Date", "Check In", "Check Out", "Status", "Working Hours"];

    useEffect(() => {
        dispatch(HandleGetEmployeeAttendance({ apiroute: "GET" }));
    }, []);

    if (attendanceState.isLoading) {
        return (
            <Loading />
        );
    }

    // Filter attendance to show only current employee's records
    const employeeAttendance = attendanceState.data || [];

    return (
        <div className="attendance-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="attendance-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Attendance</h1>
            </div>
            <div className="attendance-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-5"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <div className="list-items-container">
                        {employeeAttendance.length > 0 ? 
                            employeeAttendance.map((item) => (
                                <div className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-5 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`} key={item._id}>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        {new Date(item.date).toLocaleDateString()}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        {item.checkIn ? new Date(item.checkIn).toLocaleTimeString() : "N/A"}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        {item.checkOut ? new Date(item.checkOut).toLocaleTimeString() : "N/A"}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        <span className={`px-2 py-1 rounded-full ${item.status === "present" ? "bg-green-200 text-green-800" : item.status === "absent" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"}`}>
                                            {item.status || "N/A"}
                                        </span>
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        {item.workingHours || "N/A"}
                                    </div>
                                </div>
                            ))
                            : 
                            <div className="p-4 text-center text-gray-500">No attendance records found</div>
                        }
                    </div>
                </ListContainer>
            </div>
        </div>
    );
};