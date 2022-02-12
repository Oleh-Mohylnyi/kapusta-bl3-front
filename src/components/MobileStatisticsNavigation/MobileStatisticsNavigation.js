import BalanceTitle from "../../components/BalanceNavigationSection/BalanceTitle";
import Balance from "../../components/BalanceNavigationSection/Balance";
import BackToMain from "../../components/BalanceNavigationSection/BackToMain";
import Period from '../../components/Period';
import s from "./MobileStatisticsNavigation.module.css";

export default function MobileStatisticsNavigation () {
return (
    <><BackToMain />
    <Period />
    
    <BalanceTitle />
    <Balance /></>
)
}