import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Period from '../../components/Period';

export default function MobileStatisticsNavigation ({ handlePreviousPeriod,
    periodMonth,
    periodYear,
    handleNextPeriod}) {
return (
    <><BackToMain />
    <Period handlePreviousPeriod={handlePreviousPeriod} periodMonth={periodMonth} periodYear={periodYear} handleNextPeriod={handleNextPeriod}/>
    <BalanceTitle />
    <Balance /></>
)
}