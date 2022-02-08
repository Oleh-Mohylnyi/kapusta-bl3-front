import { NavLink } from "react-router-dom";
import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";
import s from "./ReportIncome.module.scss";

export default function ReportIncome() {
  const typesIncome = type;
  return (
    <div className={s.section}>
      <div className={s.tab}>
        <NavLink
          to="/statistics/expenses"
          // className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <button className={s.btn_left}></button>
        </NavLink>
        <h2 className={s.title}>Доходы</h2>
        <NavLink
          to="/statistics/expenses"
          // className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <button className={s.btn_right}></button>
        </NavLink>
      </div>

      {typesIncome.length > 0 && <ReportList types={typesIncome} />}
    </div>
  );
}
