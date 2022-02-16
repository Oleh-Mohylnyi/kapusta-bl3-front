import { useState, useEffect } from "react";
// import moment from "moment";
// import "moment/locale/ru";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./summary.module.scss";

const Summary = ({incomes, expenses}) => {
  const viewPort = useWindowDimensions();
 
  const [summary, setSummary] = useState([
    { month: "Ноябрь", value: 1000.0 },
    { month: "Октябрь", value: 2000.0 },
    { month: "Сентябрь", value: 3000.0 },
    { month: "Декабрь", value: 4000.0 },
    { month: "Август", value: 5000.0 },
    { month: "Июль", value: 6000.0 },
  ]);
  useEffect(() => {
    if (expenses) {
       setSummary(expenses)
    }  
 },[expenses])

  return (
    <>
      {viewPort.width > 768 && (
        <div className={s.summary}>
          <h4>Сводка</h4>
          <ul className={s.summary_list}>
            {summary.map((el, index) => (
                <li key={index} className={s.summary_item}>
                  <span>{el.month}</span>
                  <span>{el.value}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Summary;
