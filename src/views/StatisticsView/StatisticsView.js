import DiagramMobile from "../../components/StatisticDiagram/DiagramMobile";
import DiagramTablet from "../../components/StatisticDiagram/DiagramTablet";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import Report from "../../components/Report/Report/Report";
import PageContainer from "../../components/PageContainer/PageContainer";

export default function StatisticsView() {
  let width = window.innerWidth;
  return (
    <>
      <PageContainer>
        <Report />
        {width < 768 ? (
          <DiagramMobile />
        ) : (
          <DiagramContainer>
            <DiagramTablet />
          </DiagramContainer>
        )}
      </PageContainer>
    </>
  );
}
