import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";
import s from "./ReportIncome.module.scss";

export default function ReportIncome() {
  const typesIncome = type;
  return (
    <div className={s.section}>
      {typesIncome.length > 0 && <ReportList types={typesIncome} />}
    </div>
  );
}
