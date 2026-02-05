import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components/common/loading.jsx";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRRequestsPage = () => {
    const dispatch = useDispatch();
    // const requestsState = useSelector((state) => state.RequestsReducer);
    const table_headings = ["Employee", "Request Type", "Description", "Date", "Status"];

    // useEffect(() => {
    //     dispatch(HandleGetAllRequests({ apiroute: "GETALL" }));
    // }, []);

    // if (requestsState.isLoading) {
    //     return (
    //         <Loading />
    //     );
    // }

    return (
        <div className="requests-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="requests-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Employee Requests</h1>
            </div>
            <div className="requests-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-5"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <div className="p-4 text-center text-gray-500">Request management features coming soon</div>
                </ListContainer>
            </div>
        </div>
    );
};