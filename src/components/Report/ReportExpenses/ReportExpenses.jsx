import { NavLink } from "react-router-dom";
import ReportList from "../ReportList/ReportList";
import type from "../ReportList/expenses.json";
import s from "./ReportExpenses.module.scss";

export default function ReportExpenses() {
  const typesExpenses = type;

  return (
    <div className={s.section}>
      <div className={s.tab}>
        <NavLink
          to="/statistics/income"
          // className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <button className={s.btn_left}></button>
        </NavLink>
        <h2 className={s.title}>Расходы</h2>
        <NavLink
          to="/statistics/income"
          // className={(navData) => (navData.isActive ? s.activeLink : s.link)}
        >
          <button className={s.btn_right}></button>
        </NavLink>
      </div>

      {typesExpenses.length > 0 && <ReportList types={typesExpenses} />}
    </div>
  );
}
