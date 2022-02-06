import { useState, useEffect } from "react";
import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer"
// import Report from "../../components/Report/Report";

export default function StatisticsView() {
  // const [month, setMonth] = useState(new Date().format("MM"));
  // const [year, setYear] = useState(new Date().format("YYYY"));
  // const [typesIncome, setTypesIncome] = useState([]);
  // const [typesExpenses, setTypesExpenses] = useState([]);

  // useEffect(() => {

  //   return () => {

  //   };
  // }, [month, year]);

  let width = window.innerWidth;
  return (
    <>
      <Report
      // typesIncome={typesIncome} typesExpenses={typesExpenses}
      />
      {width < 768 ? <DiagramMobile /> : <DiagramContainer />}
    </>
  );

}
