import ReportExpenses from "../ReportExpenses/ReportExpenses";
import ReportIncome from "../ReportIncome/ReportIncome";
import { useState } from "react";
import s from "./Report.module.scss";

const Report = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className={s.section}>
      <div className={s.tab}>
        <button onClick={toggler} className={s.btn_left}></button>
        <h2 className={s.title}>{toggle ? "Расходы" : "Доходы"}</h2>
        <button onClick={toggler} className={s.btn_right}></button>
      </div>
      {toggle ? <ReportExpenses /> : <ReportIncome />}
    </div>
  );
};

export default Report;
