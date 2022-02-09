import ReportList from "../ReportList/ReportList";
import type from "../ReportList/expenses.json";
import s from "./ReportExpenses.module.scss";

export default function ReportExpenses() {
  const typesExpenses = type;

  return (
    <div className={s.section}>
      {typesExpenses.length > 0 && <ReportList types={typesExpenses} />}
    </div>
  );
}
