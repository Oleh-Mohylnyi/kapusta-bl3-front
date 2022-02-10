import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";

export default function ReportIncome() {
  const typesIncome = type;
  return <>{typesIncome.length > 0 && <ReportList types={typesIncome} />}</>;
}
