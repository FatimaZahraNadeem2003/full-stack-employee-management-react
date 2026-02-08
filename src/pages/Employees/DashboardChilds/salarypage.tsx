import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployees } from "../../../redux/Thunks/EmployeeThunk";
import { Loading } from "../../../components/common/loading.tsx";

export const EmployeeSalaryPage = () => {
    const dispatch = useDispatch();
    const employeeState = useSelector((state: any) => state.employeereducer);

    useEffect(() => {
        dispatch(HandleGetEmployees({ apiroute: "SALARY" }) as any);
    }, []);

    if (employeeState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="salary-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="salary-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Salary</h1>
            </div>
            <div className="salary-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="salary-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <p>Salary data will be displayed here.</p>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};