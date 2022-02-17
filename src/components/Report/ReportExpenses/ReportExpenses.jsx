import ReportList from "../ReportList/ReportList";
import type from "../ReportList/expenses.json";
import s from "../../StatisticDiagram/Diagram.module.scss";

export default function ReportExpenses({ data }) {
  const typesExpenses = type;

  let dataItems = [];

  const setDataForRender = () => {
    data.forEach(el => {
      typesExpenses.forEach(dataEl => {
        if (el.name === dataEl.type) {
          el.icon = dataEl.icon;
          el.type = dataEl.type;
          el.sum = el.uv;
        }
      })
      dataItems.push(el)
    })
  }
  setDataForRender()

  return (
    <>{dataItems.length > 0 ? <ReportList types={dataItems} /> : (<p className={s.notification}>В этом месяце нет затрат.</p>)}</>
  );
}
