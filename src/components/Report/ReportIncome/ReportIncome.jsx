import { NavLink } from "react-router-dom";
import ReportList from "../ReportList/ReportList";
import ReportIcon from "../ReportIcon/ReportIcon";
import type from "../ReportList/income.json";
import s from "./ReportIncome.scss";

export default function ReportIncome() {
  const typesIncome = type;
  return (
    <div className={s.section}>
      <div className={s.tab}>
        <NavLink
          to="/statistics/expenses"
          className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <ReportIcon name="arrow-left" size="10" />
        </NavLink>
        <h2 className={s.title}>Доходы</h2>
        <NavLink
          to="/statistics/expenses"
          className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <ReportIcon name="arrow-right" size="10" />
        </NavLink>
      </div>

      {typesIncome.length > 0 && <ReportList types={typesIncome} />}
    </div>
  );
}
