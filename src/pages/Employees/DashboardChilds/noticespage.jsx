import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployeeNotices } from "../../../redux/Thunks/NoticeThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const EmployeeNoticesPage = () => {
    const dispatch = useDispatch();
    const noticeState = useSelector((state) => state.NoticeReducer);
    const employeeState = useSelector((state) => state.employeereducer);
    const table_headings = ["Title", "Description", "Date", "Type"];

    useEffect(() => {
        dispatch(HandleGetEmployeeNotices({ apiroute: "GET" }));
    }, []);

    if (noticeState.isLoading) {
        return (
            <Loading />
        );
    }

    // Filter notices to show only those relevant to the current employee
    const employeeNotices = noticeState.data || [];

    return (
        <div className="notices-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="notices-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Notices</h1>
            </div>
            <div className="notices-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-4"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    <div className="list-items-container">
                        {employeeNotices.length > 0 ? 
                            employeeNotices.map((item) => (
                                <div className={`list-item-container grid min-[250px]:grid-cols-1 sm:grid-cols-4 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`} key={item._id}>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis">
                                        {item.title}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis">
                                        {item.description}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </div>
                                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                                        <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                                            {item.noticeType || "General"}
                                        </span>
                                    </div>
                                </div>
                            ))
                            : 
                            <div className="p-4 text-center text-gray-500">No notices found</div>
                        }
                    </div>
                </ListContainer>
            </div>
        </div>
    );
};