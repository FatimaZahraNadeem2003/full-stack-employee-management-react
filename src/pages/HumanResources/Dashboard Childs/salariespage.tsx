import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns";

import { ListContainer } from "../../../components/common/Dashboard/ListDesigns";

export const HRSalariesPage = () => {
  // const salariesState = useSelector((state) => state.SalariesReducer);
  const table_headings = ["Employee", "Basic Salary", "Allowances", "Deductions", "Net Salary", "Status"];

  // useEffect(() => {
  //     dispatch(HandleGetAllSalaries({ apiroute: "GETALL" }));
  // }, []);

  // if (salariesState.isLoading) {
  //     return (
  //         <Loading />
  //     );
  // }

  return (
    <div className="salaries-page-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
      <div className="salaries-heading flex justify-between items-center md:pe-5">
        <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Employee Salaries</h1>
      </div>
      <div className="salaries-data flex flex-col gap-4 md:pe-5 overflow-auto">
        <ListWrapper>
          <div className="p-4 text-center text-gray-500">Salary management features coming soon</div>
        </ListWrapper>
        <ListContainer>
          <div className="p-4 text-center text-gray-500">Salary management features coming soon</div>
        </ListContainer>
      </div>
    </div>
  );
};