import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetAllLeaves, HandleUpdateLeaves, HandleDeleteLeaves } from "../../../redux/Thunks/LeavesThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { LeaveListItems } from "../../../components/common/Dashboard/ListDesigns";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRLeavesPage = () => {
    const dispatch = useDispatch();
    const leavesState = useSelector((state) => state.LeavesReducer);
    const HRState = useSelector((state) => state.HRReducer);
    const table_headings = ["Employee", "Start Date", "End Date", "Title", "Reason", "Status", "Actions"];

    useEffect(() => {
        console.log("Fetching all leaves...");
        dispatch(HandleGetAllLeaves({ apiroute: "GETALL" }));
    }, []);

    useEffect(() => {
        console.log("Leaves state:", leavesState);
    }, [leavesState]);

    const handleApprove = (leaveId) => {
        dispatch(HandleUpdateLeaves({ 
            apiroute: "UPDATE", 
            data: { 
                leaveID: leaveId, 
                status: "approved", 
                HRID: HRState.HRID
            } 
        }));
    };

    const handleReject = (leaveId) => {
        dispatch(HandleUpdateLeaves({ 
            apiroute: "UPDATE", 
            data: { 
                leaveID: leaveId, 
                status: "rejected", 
                HRID: HRState.HRID
            } 
        }));
    };

    const handleDelete = (leaveId) => {
        dispatch(HandleDeleteLeaves({ 
            apiroute: "DELETE", 
            id: leaveId 
        }));
    };

    if (leavesState.isLoading) {
        return (
            <Loading />
        );
    }

    if (leavesState.error.status) {
        return (
            <div className="p-4 text-center text-red-500">
                Error loading leaves: {leavesState.error.message}
            </div>
        );
    }

    return (
        <div className="leaves-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="leaves-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Leave Requests</h1>
            </div>
            <div className="leaves-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-7"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <LeaveListItems 
                        TargetedState={leavesState} 
                        onApprove={handleApprove}
                        onReject={handleReject}
                        onDelete={handleDelete}
                    />
                </ListContainer>
            </div>
        </div>
    );
};