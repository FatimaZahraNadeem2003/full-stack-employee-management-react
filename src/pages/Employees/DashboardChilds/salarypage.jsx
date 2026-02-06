import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployeeSalary } from "../../../redux/Thunks/SalaryThunk.js";
import { Loading } from "../../../components/common/loading.jsx";

export const EmployeeSalaryPage = () => {
    const dispatch = useDispatch();
    const salaryState = useSelector((state) => state.SalaryReducer);

    useEffect(() => {
        dispatch(HandleGetEmployeeSalary({ apiroute: "GET" }));
    }, []);

    if (salaryState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="salary-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="salary-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Salary Information</h1>
            </div>
            <div className="salary-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="salary-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Basic Salary:</label>
                            <p className="ml-2">${salaryState.data?.basicsalary || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Allowance:</label>
                            <p className="ml-2">${salaryState.data?.allowance || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Deduction:</label>
                            <p className="ml-2">${salaryState.data?.deduction || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Net Salary:</label>
                            <p className="ml-2">${salaryState.data?.netsalary || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Payment Method:</label>
                            <p className="ml-2">{salaryState.data?.paymentmethod || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Payment Date:</label>
                            <p className="ml-2">{salaryState.data?.paymentdate ? new Date(salaryState.data.paymentdate).toLocaleDateString() : "N/A"}</p>
                        </div>
                        <div className="info-item min-[250px]:col-span-2">
                            <label className="font-bold text-gray-700">Bank Account:</label>
                            <p className="ml-2">{salaryState.data?.bankaccount || "N/A"}</p>
                        </div>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};