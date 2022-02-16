import ReportList from "../ReportList/ReportList";
// import type from "../ReportList/income.json";

export default function ReportIncome({ categories }) {
  // const typesIncome = type;
  return <>{categories.length > 0 && <ReportList types={categories} />}</>;
}
