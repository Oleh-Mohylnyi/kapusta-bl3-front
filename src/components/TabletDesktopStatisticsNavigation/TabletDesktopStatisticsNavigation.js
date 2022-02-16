// import Button from "../../components/BalanceNavigationSection/Button";
import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Period from '../../components/Period';
// import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./TabletDesktopStatisticsNavigation.module.css";

export default function TabletDesktopStatisticsNavigation ({handlePreviousPeriod,
    periodMonth,
    periodYear,
    handleNextPeriod,
    onGoBackClick, 
    setNotVisible}) {
    // const windowSize = useWindowDimensions();
    // const desktopView = windowSize.width >= 1280;
   
    return (
        <div className={s.desktopBalance}>
               
            <BackToMain goBackClick={onGoBackClick}/>
            <div className={s.desktopBalanceContainer}>
            <BalanceTitle />
            <Balance setNotVisible={setNotVisible}/>
   
    </div>
    
    <Period handlePreviousPeriod={handlePreviousPeriod} periodMonth={periodMonth} periodYear={periodYear} handleNextPeriod={handleNextPeriod}/>
    </div>
    )
}