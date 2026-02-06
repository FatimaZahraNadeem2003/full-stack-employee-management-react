import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetAllLeaves } from "../../../redux/Thunks/LeavesThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { LeaveListItems } from "../../../components/common/Dashboard/ListDesigns";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const EmployeeLeavesPage = () => {
    const dispatch = useDispatch();
    const leavesState = useSelector((state) => state.LeavesReducer);
    const employeeState = useSelector((state) => state.employeereducer);
    const table_headings = ["Start Date", "End Date", "Title", "Reason", "Status"];

    useEffect(() => {
        // Get employee's own leaves
        dispatch(HandleGetAllLeaves({ apiroute: "GETALL" }));
    }, []);

    if (leavesState.isLoading) {
        return (
            <Loading />
        );
    }

    // Filter leaves to show only current employee's leaves
    const employeeLeaves = leavesState.data?.filter(leave => 
        leave.employee?._id === employeeState.data?._id
    ) || [];

    return (
        <div className="leaves-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="leaves-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Leave Requests</h1>
            </div>
            <div className="leaves-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-5"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <div className="list-items-container">
                        {employeeLeaves.length > 0 ? 
                            employeeLeaves.map((item) => (
                                <div className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-5 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`} key={item._id}>
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
                                </div>
                            ))
                            : 
                            <div className="p-4 text-center text-gray-500">No leave requests found</div>
                        }
                    </div>
                </ListContainer>
            </div>
        </div>
    );
};