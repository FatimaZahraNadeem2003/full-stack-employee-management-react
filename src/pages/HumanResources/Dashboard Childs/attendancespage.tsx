import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components/common/loading.tsx";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRAttendancesPage = () => {
  const dispatch = useDispatch();
  // const attendancesState = useSelector((state) => state.AttendancesReducer);
  const table_headings = ["Employee", "Date", "Status", "Check-in", "Check-out"];

  // useEffect(() => {
  //     dispatch(HandleGetAllAttendances({ apiroute: "GETALL" }));
  // }, []);

  // if (attendancesState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="attendances-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="attendances-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Employee Attendances</h1>
      </div>
      <div className="attendances-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <HeadingBar table_layout={"grid-cols-5"} table_headings={table_headings} />
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Attendance management features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};