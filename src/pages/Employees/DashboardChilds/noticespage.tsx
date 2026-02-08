import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployees } from "../../../redux/Thunks/EmployeeThunk";
import { Loading } from "../../../components/common/loading.tsx";

export const EmployeeNoticesPage = () => {
    const dispatch = useDispatch();
    const employeeState = useSelector((state: any) => state.employeereducer);

    useEffect(() => {
        dispatch(HandleGetEmployees({ apiroute: "NOTICES" }) as any);
    }, []);

    if (employeeState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="notices-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="notices-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Notices</h1>
            </div>
            <div className="notices-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="notices-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <p>Notice data will be displayed here.</p>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};