import ReportExpenses from "./ReportExpenses/ReportExpenses";
import ReportIncome from "./ReportIncome/ReportIncome";
export default function Report(params) {
  return (
    <>
      <ReportIncome />
      <ReportExpenses />
    </>
  );
}
