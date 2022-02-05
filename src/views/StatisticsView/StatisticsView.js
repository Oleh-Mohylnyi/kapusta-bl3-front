import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";


export default function StatisticsView() {
let width = window.innerWidth;
    return (
 <>{width < 768 ? <DiagramMobile /> :  <DiagramContainer />}</>
    )
}
