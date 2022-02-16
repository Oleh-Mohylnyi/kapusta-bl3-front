import ReportList from "../ReportList/ReportList";
// import type from "../ReportList/expenses.json";

export default function ReportExpenses({ categories }) {
  // const typesExpenses = type;

  return <>{categories.length > 0 && <ReportList types={categories} />}</>;
}
