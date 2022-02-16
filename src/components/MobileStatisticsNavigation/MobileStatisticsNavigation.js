import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Period from '../../components/Period';

export default function MobileStatisticsNavigation ({ handlePreviousPeriod,
    periodMonth,
    periodYear,
    handleNextPeriod,
    onGoBackClick,
    setNotVisible}) {
return (
    <><BackToMain goBackClick={onGoBackClick} />
    <Period handlePreviousPeriod={handlePreviousPeriod} periodMonth={periodMonth} periodYear={periodYear} handleNextPeriod={handleNextPeriod}/>
    <BalanceTitle />
    <Balance setNotVisible={setNotVisible}/></>
)
}