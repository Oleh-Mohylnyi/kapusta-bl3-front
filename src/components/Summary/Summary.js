import { useState, useEffect } from "react";
// import moment from "moment";
// import "moment/locale/ru";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./summary.module.scss";

const Summary = ({data}) => {
  const viewPort = useWindowDimensions();
  const [summary, setSummary] = useState([
    // { month: "Ноябрь", value: 0.0},
    // { month: "Октябрь", value: 0.0},
    // { month: "Сентябрь", value: 0.0},
    { month: "Декабрь", value: 0.0},
    { month: "Август", value: 0.0 },
    { month: "Июль", value: 0.0 },
  ]);
  useEffect(() => {
       setSummary(data)
 },[data])

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
