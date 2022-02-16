// import { useState } from "react";
// import moment from "moment";
// import "moment/locale/ru";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./summary.module.scss";

const Summary = (month, year, type) => {
  const viewPort = useWindowDimensions();
  const summaryList = [
    // { month: "Ноябрь", value: 1000.0 },
    // { month: "Октябрь", value: 2000.0 },
    // { month: "Сентябрь", value: 3000.0 },
    // { month: "Декабрь", value: 4000.0 },
    // { month: "Август", value: 5000.0 },
    // { month: "Июль", value: 6000.0 },
  ];
  // const date = new Date();
  // const [periodDate, setPeriodDate] = useState(moment(date));
  // const [periodMonth, setPeriodMonth] = useState(moment(date).format("MM"));
  // const [periodYear, setPeriodYear] = useState(moment(date).format("YYYY"));

  // const indexOfMonth = (periodMonth) => {
  //   periodMonth.forEach((month, idx) => periodMonth.indexOf(month) === idx);
  // };

  const summaryListSort = [...summaryList].sort(
    (prev, next) => next.month - prev.month
  );
    const summaryLength = summaryListSort?.length

  return (
    <>
      {viewPort.width > 768 && (
        <article className={s.article}>
          <h4 className={s.articleTitle}>Сводка</h4>
          <ul
            className={summaryLength >= 6 ? s.summaryList : `${s.summaryList} ${s.bgColor}`}
            // style={summaryLength < 6}
          >
            {summaryListSort &&
              summaryListSort.map(({ month, value }, index) => (
                <li key={index} className={s.summaryItem}>
                  <span>{month}</span>
                  <span>{value}</span>
                </li>
              ))}
          </ul>
        </article>
      )}
    </>
  );
};
export default Summary;
