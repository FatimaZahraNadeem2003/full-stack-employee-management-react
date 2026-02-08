import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";



export const EmployeeDepartmentPage = () => {

    return (
        <div className="department-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="department-heading flex justify-between items-center md:pe-5">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">My Department</h1>
            </div>
            <div className="department-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <div className="department-info grid min-[250px]:grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <p>Department data will be displayed here.</p>
                    </div>
                </ListWrapper>
            </div>
        </div>
    );
};