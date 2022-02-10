import ReportList from "../ReportList/ReportList";
import type from "../ReportList/expenses.json";

export default function ReportExpenses() {
  const typesExpenses = type;

  return (
    <>{typesExpenses.length > 0 && <ReportList types={typesExpenses} />}</>
  );
}
