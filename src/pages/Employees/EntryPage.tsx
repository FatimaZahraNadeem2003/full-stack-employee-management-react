import { Outlet } from "react-router-dom";

export const EmployeeEntryPage = () => {
    return (
        <div className="employee-entry-page">
            <h1>Employee Portal</h1>
            <Outlet />
        </div>
    );
};