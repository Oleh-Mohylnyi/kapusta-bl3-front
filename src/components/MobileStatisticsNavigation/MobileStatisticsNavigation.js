import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Period from '../../components/Period';


export default function MobileStatisticsNavigation () {
return (
    <><BackToMain />
    <Period />
    
    <BalanceTitle />
    <Balance /></>
)
}