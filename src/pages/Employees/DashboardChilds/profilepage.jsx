import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployees } from "../../../redux/Thunks/EmployeeThunk.js";
import { Loading } from "../../../components/common/loading.jsx";

export const EmployeeProfilePage = () => {
    const dispatch = useDispatch();
    const employeeState = useSelector((state) => state.employeereducer);

    useEffect(() => {
        dispatch(HandleGetEmployees({ apiroute: "GET" }));
    }, []);

    if (employeeState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="profile-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="profile-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Profile</h1>
            </div>
            <div className="profile-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="profile-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="info-item">
                            <label className="font-bold text-gray-700">First Name:</label>
                            <p className="ml-2">{employeeState.data?.firstname || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Last Name:</label>
                            <p className="ml-2">{employeeState.data?.lastname || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Email:</label>
                            <p className="ml-2">{employeeState.data?.email || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Contact Number:</label>
                            <p className="ml-2">{employeeState.data?.contactnumber || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Role:</label>
                            <p className="ml-2">{employeeState.data?.role || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department:</label>
                            <p className="ml-2">{employeeState.data?.department || "N/A"}</p>
                        </div>
                        <div className="info-item min-[250px]:col-span-2">
                            <label className="font-bold text-gray-700">Joining Date:</label>
                            <p className="ml-2">{employeeState.data?.joiningdate ? new Date(employeeState.data.joiningdate).toLocaleDateString() : "N/A"}</p>
                        </div>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};