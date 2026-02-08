import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";

import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRInterviewInsightsPage = () => {
  // const insightsState = useSelector((state) => state.InterviewInsightsReducer);
  const table_headings = ["Candidate", "Position", "Interview Date", "Status", "Feedback"];

  // useEffect(() => {
  //     dispatch(HandleGetAllInterviewInsights({ apiroute: "GETALL" }));
  // }, []);

  // if (insightsState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="insights-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="insights-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Interview Insights</h1>
      </div>
      <div className="insights-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <div className="p-4 text-center text-gray-500">Interview insights features coming soon</div>
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Interview insights features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};