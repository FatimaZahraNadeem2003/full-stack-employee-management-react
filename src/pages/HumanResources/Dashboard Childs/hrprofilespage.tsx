import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";

import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRProfilesPage = () => {
  // const profilesState = useSelector((state) => state.HRProfilesReducer);
  const table_headings = ["Name", "Email", "Role", "Department", "Status"];

  // useEffect(() => {
  //     dispatch(HandleGetAllHRProfiles({ apiroute: "GETALL" }));
  // }, []);

  // if (profilesState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="profiles-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="profiles-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">HR Profiles</h1>
      </div>
      <div className="profiles-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <div className="p-4 text-center text-gray-500">HR profiles management features coming soon</div>
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">HR profiles management features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};