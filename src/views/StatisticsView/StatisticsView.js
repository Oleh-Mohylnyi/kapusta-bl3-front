// import { Outlet } from "react-router-dom";
import Diagram from "../../components/StatisticDiagram/Diagram";
import DiagramContainer from "../../components/StatisticDiagram/DiagramContainer";
import TotalReport from "../../components/TotalReport/TotalReport";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import Report from "../../components/Report/Report/Report";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { fetchBalanceThunk } from "../../redux/reports/reportsThunk";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function StatisticsView() {
  const [balance, setBalance] = useState(0.00);
  const dispatch = useDispatch();
  const token = useSelector(state=>state.auth.token)

  useEffect(() => {
  setBalance(dispatch(fetchBalanceThunk(token)))
  }, [])
  console.log(balance);
  const size = useWindowDimensions();
  const { width } = size;
  const mobile = () => {
    if (width < 768) {
      return true;
    }
    return false;
  };  
  return (
    <>
      <TotalReport />
      {/* <Outlet /> */}
      <Report />
      <DiagramContainer>
        <Diagram mobile={mobile()} />
      </DiagramContainer>
      <BackgroundImages />
    </>
  );
}
