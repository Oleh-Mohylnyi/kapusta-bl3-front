import { NavLink } from "react-router-dom";
import ReportList from "../ReportList/ReportList";
import ReportIcon from "../ReportIcon/ReportIcon";
import type from "../ReportList/expenses.json";
import s from "./ReportExpenses.scss";

export default function ReportExpenses() {
  const typesExpenses = type;

  return (
    <div className={s.section}>
      <div className={s.tab}>
        <NavLink
          to="/statistics/income"
          className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <ReportIcon name="arrow-left" size="10" />
        </NavLink>
        <h2 className={s.title}>Расходы</h2>
        <NavLink
          to="/statistics/income"
          className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <ReportIcon name="arrow-right" size="10" />
        </NavLink>
      </div>

      {typesExpenses.length > 0 && <ReportList types={typesExpenses} />}
    </div>
  );
}
