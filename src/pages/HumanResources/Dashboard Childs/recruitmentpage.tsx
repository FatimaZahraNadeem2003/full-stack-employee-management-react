import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";

import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRRecruitmentPage = () => {
  // const recruitmentState = useSelector((state) => state.RecruitmentReducer);
  const table_headings = ["Position", "Applicants", "Status", "Posted Date"];

  // useEffect(() => {
  //     dispatch(HandleGetAllRecruitments({ apiroute: "GETALL" }));
  // }, []);

  // if (recruitmentState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="recruitment-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="recruitment-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Recruitment</h1>
      </div>
      <div className="recruitment-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <div className="p-4 text-center text-gray-500">Recruitment management features coming soon</div>
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Recruitment management features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};