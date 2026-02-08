import { ContentWrapper } from "../../../components/common/Dashboard/contentwrappers";
import { SalaryChart } from "../../../components/common/Dashboard/salarychart";
import { DataTable } from "../../../components/common/Dashboard/datatable";
import { useEffect } from "react";
import { HandleGetDashboard } from "../../../redux/Thunks/DashboardThunk";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../../../components/common/loading.tsx";

export const HRDashboardPage = () => {
  console.log("Reloaded");
  const DashboardState = useSelector((state: any) => state.dashboardreducer);
  const dispatch = useDispatch();
  const DataArray = [
    {
      image: "/../../src/assets/HR-Dashboard/employee-2.png",
      dataname: "employees",
      path: "/HR/dashboard/employees"
    },
    {
      image: "/../../src/assets/HR-Dashboard/department.png",
      dataname: "departments",
      path: "/HR/dashboard/departments",
    },
    {
      image: "/../../src/assets/HR-Dashboard/leave.png",
      dataname: "leaves",
      path: "/HR/dashboard/Leaves"
    },
    {
      image: "/../../src/assets/HR-Dashboard/request.png",
      dataname: "requestes",
      path: "/HR/dashboard/Requests"
    }
  ];

  useEffect(() => {
    dispatch(HandleGetDashboard({ apiroute: "GETDATA" }) as any);
  },[]);

  if (DashboardState.isLoading) { 
    return (
      <Loading />
    );
  }

  return (
    <>
      <ContentWrapper title="Dashboard Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DataArray.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={item.image} alt={item.dataname} className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-center font-semibold capitalize">{item.dataname}</h3>
            </div>
          ))}
        </div>
      </ContentWrapper>
      <div className="salary-notices-container h-3/4 grid min-[250px]:grid-cols-1 lg:grid-cols-2 min-[250px]:gap-3 xl:gap-3">
        <SalaryChart 
          data={DashboardState.data?.salaryData || []} 
          title="Salary Overview" 
          description="Monthly salary distribution" 
        />
        <DataTable 
          data={DashboardState.data?.notices || []} 
          columns={[{ key: "title", label: "Title" }, { key: "description", label: "Description" }]} 
        />
      </div>
    </>
  );
};