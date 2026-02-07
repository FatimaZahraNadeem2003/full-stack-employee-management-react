import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleGetEmployees, HandlePatchEmployees } from "../../../redux/Thunks/EmployeeThunk.js";
import { Loading } from "../../../components/common/loading.jsx";
import { Button } from "../../../components/ui/button.jsx";

export const EmployeeProfilePage = () => {
    const dispatch = useDispatch();
    const employeeState = useSelector((state: any) => state.employeereducer);

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: ""
    });

    useEffect(() => {
        dispatch(HandleGetEmployees({ apiroute: "GET" }) as any);
    }, []);

    useEffect(() => {
        if (employeeState.data) {
            setEditData({
                firstname: employeeState.data.firstname || "",
                lastname: employeeState.data.lastname || "",
                email: employeeState.data.email || "",
                contactnumber: employeeState.data.contactnumber || ""
            });
        }
    }, [employeeState.data]);

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        dispatch(HandlePatchEmployees({ 
            apiroute: "UPDATE_PROFILE", 
            data: editData
        }) as any).then(() => {
            dispatch(HandleGetEmployees({ apiroute: "GET" }) as any);
        });
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        if (employeeState.data) {
            setEditData({
                firstname: employeeState.data.firstname || "",
                lastname: employeeState.data.lastname || "",
                email: employeeState.data.email || "",
                contactnumber: employeeState.data.contactnumber || ""
            });
        }
        setIsEditing(false);
    };

    if (employeeState.isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="profile-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="profile-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Profile</h1>
                {!isEditing && (
                    <Button 
                        onClick={handleEdit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                        Edit Profile
                    </Button>
                )}
            </div>
            <div className="profile-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="profile-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="info-item">
                            <label className="font-bold text-gray-700">First Name:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="firstname"
                                    value={editData.firstname}
                                    onChange={handleEditChange}
                                    className="ml-2 border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p className="ml-2">{employeeState.data?.firstname || "N/A"}</p>
                            )}
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Last Name:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="lastname"
                                    value={editData.lastname}
                                    onChange={handleEditChange}
                                    className="ml-2 border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p className="ml-2">{employeeState.data?.lastname || "N/A"}</p>
                            )}
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Email:</label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    className="ml-2 border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p className="ml-2">{employeeState.data?.email || "N/A"}</p>
                            )}
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Contact Number:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="contactnumber"
                                    value={editData.contactnumber}
                                    onChange={handleEditChange}
                                    className="ml-2 border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p className="ml-2">{employeeState.data?.contactnumber || "N/A"}</p>
                            )}
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Role:</label>
                            <p className="ml-2">{employeeState.data?.role || "N/A"}</p>
                        </div>
                        <div className="info-item">
                            <label className="font-bold text-gray-700">Department:</label>
                            <p className="ml-2">{employeeState.data?.department?.name || employeeState.data?.department || "N/A"}</p>
                        </div>
                        <div className="info-item min-[250px]:col-span-2">
                            <label className="font-bold text-gray-700">Joining Date:</label>
                            <p className="ml-2">{employeeState.data?.joiningdate ? new Date(employeeState.data.joiningdate).toLocaleDateString() : "N/A"}</p>
                        </div>
                    </div>
                    
                    {isEditing && (
                        <div className="edit-buttons flex gap-2 p-4">
                            <Button 
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                            >
                                Save
                            </Button>
                            <Button 
                                onClick={handleCancel}
                                variant="outline"
                                className="px-4 py-2 rounded-md"
                            >
                                Cancel
                            </Button>
                        </div>
                    )}
                </ListWrapper>
            </div>
        </div>
    );
};