import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components/common/loading.tsx";
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRNoticesPage = () => {
  const dispatch = useDispatch();
  // const noticesState = useSelector((state) => state.NoticesReducer);
  const table_headings = ["Title", "Description", "Date", "Status"];

  // useEffect(() => {
  //     dispatch(HandleGetAllNotices({ apiroute: "GETALL" }));
  // }, []);

  // if (noticesState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="notices-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="notices-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Issue Notices</h1>
      </div>
      <div className="notices-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <HeadingBar table_layout={"grid-cols-4"} table_headings={table_headings} />
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Notice management features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};