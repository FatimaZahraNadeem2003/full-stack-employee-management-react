import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployeeDepartment } from "../../../redux/Thunks/DepartmentThunk.js";
import { Loading } from "../../../components/common/loading.jsx";

export const EmployeeDepartmentPage = () => {
    const dispatch = useDispatch();
    const departmentState = useSelector((state) => state.DepartmentReducer);
    const employeeState = useSelector((state) => state.employeereducer);

    useEffect(() => {
        // Get employee's department
        dispatch(HandleGetEmployeeDepartment({ apiroute: "GET" }));
    }, []);

    if (departmentState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="department-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="department-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Department</h1>
            </div>
            <div className="department-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="department-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department Name:</label>
                            <p className="ml-2">{departmentState.data?.name || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department Head:</label>
                            <p className="ml-2">{departmentState.data?.departmenthead || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department Description:</label>
                            <p className="ml-2">{departmentState.data?.description || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department Code:</label>
                            <p className="ml-2">{departmentState.data?.departmentcode || "N/A"}</p>
                        </div>
                        <div className="info-item min-[250px]:col-span-2">
                            <label className="font-bold text-gray-700">Employee Count:</label>
                            <p className="ml-2">{departmentState.data?.employees?.length || 0}</p>
                        </div>
                        <div className="info-item min-[250px]:col-span-2">
                            <label className="font-bold text-gray-700">Department Members:</label>
                            <ul className="ml-2 mt-2">
                                {departmentState.data?.employees?.map((emp, index) => (
                                    <li key={index} className="mb-1">
                                        {emp.firstname} {emp.lastname} ({emp.email})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};