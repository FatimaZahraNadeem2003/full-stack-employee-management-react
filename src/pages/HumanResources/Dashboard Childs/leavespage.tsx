import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetLeaves, HandleUpdateLeaves, HandleDeleteLeaves } from "../../../redux/Thunks/LeavesThunk";
import { Loading } from "../../../components/common/loading.tsx";
import { LeaveListItems } from "../../../components/common/Dashboard/ListDesigns";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRLeavesPage = () => {
  const dispatch = useDispatch();
  const leavesState = useSelector((state: any) => state.LeavesReducer);
  const HRState = useSelector((state: any) => state.HRReducer);
  const table_headings = ["Employee", "Start Date", "End Date", "Title", "Reason", "Status", "Actions"];

  useEffect(() => {
    console.log("Fetching all leaves...");
    dispatch(HandleGetLeaves({ apiroute: "GETALL" }) as any);
  }, []);

  useEffect(() => {
    console.log("Leaves state:", leavesState);
    if (leavesState.data && leavesState.data.length > 0) {
      console.log("Leave data:", leavesState.data);
    }

  }, [leavesState]);

  const handleApprove = (leaveId: string) => {
    dispatch(HandleUpdateLeaves({
      apiroute: "UPDATE",
      data: {
        leaveID: leaveId,
        status: "approved",
        HRID: HRState.HRID
      }
    }) as any);
  };

  const handleReject = (leaveId: string) => {
    dispatch(HandleUpdateLeaves({
      apiroute: "UPDATE",
      data: {
        leaveID: leaveId,
        status: "rejected",
        HRID: HRState.HRID
      }
    }) as any);
  };

  const handleDelete = (leaveId: string) => {
    dispatch(HandleDeleteLeaves({
      apiroute: "DELETE",
      id: leaveId
    }) as any);
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

  const handleRefresh = () => {
    dispatch(HandleGetLeaves({ apiroute: "GETALL" }) as any);
  };

  return (
    <div className="leaves-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="leaves-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Leave Requests</h1>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refresh
        </button>
      </div>
      <div className="leaves-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <div className="p-4 text-center text-gray-500">Leave management features coming soon</div>
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Leave data will be displayed here</div>
        </ListContainer>
      </div>
    </div>
  );
};