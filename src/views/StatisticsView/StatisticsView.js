import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer"
// import Report from "../../components/Report/Report";

export default function StatisticsView() {
let width = window.innerWidth;
    return (
      <>
        {/* <Report /> */}
        {width < 768 ? <DiagramMobile /> : <DiagramContainer />}
      </>
    )
}
