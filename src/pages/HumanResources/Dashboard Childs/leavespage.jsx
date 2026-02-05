import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetAllLeaves } from "../../../redux/Thunks/LeavesThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { LeaveListItems } from "../../../components/common/Dashboard/ListDesigns";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRLeavesPage = () => {
    const dispatch = useDispatch();
    const leavesState = useSelector((state) => state.LeavesReducer);
    const table_headings = ["Employee", "Start Date", "End Date", "Title", "Reason", "Status"];

    useEffect(() => {
        dispatch(HandleGetAllLeaves({ apiroute: "GETALL" }));
    }, []);

    if (leavesState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="leaves-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="leaves-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Leave Requests</h1>
            </div>
            <div className="leaves-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-6"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <LeaveListItems TargetedState={leavesState} />
                </ListContainer>
            </div>
        </div>
    );
};