import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Balance from '../Balance';
import StatisticsLink from '../StatisticsLink';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from './BalanceNavigation.module.css';
import BalanceTitle from "../BalanceTitle";
import Button from "../Button";
import {getBalance} from "../../../redux/reports/reportsSelectors";
import {fetchBalanceThunk} from "../../../redux/reports/reportsThunk";
import {updateBalanceThunk} from "../../../redux/reports/reportsThunk";

export default function BalanceNavigation () {
 const windowSize = useWindowDimensions();
 const desktopAndTabletView = windowSize.width >= 768;
//   const mobileView = windowSize.width < 767.98;
const balance = useSelector(getBalance);
const dispatch = useDispatch();

const [currentBalance, setCurrentBalance] = useState(balance);




const inputChange = (e) => { 
   setCurrentBalance(e.target.value);
};



const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(updateBalanceThunk({ balance }),
   [ balance]
   )
   
}

useEffect(() => {
   dispatch(fetchBalanceThunk())
   setCurrentBalance(balance);
   }, [dispatch, balance]);





   return (

   
      
      <>
      {desktopAndTabletView ? (
         
         <>
              <div className={s.wrapper}>
                 <BalanceTitle/>

               <Balance onInputChange={inputChange} balance={balance} onHandleSubmit={handleSubmit}/>
               <Button onHandleSubmit={handleSubmit} balance={balance}/>
              
               <StatisticsLink />
               </div>
               </>
              
      ) :
     (<>
     <div className={s.mobileWrapper}>
     <StatisticsLink />
     <BalanceTitle/>
     <div className={s.formWrapper}>
     <Balance onInputChange={inputChange} balance={currentBalance} onHandleSubmit={handleSubmit}/>
     <Button onHandleSubmit={handleSubmit} balance={currentBalance}/>
     </div>
     </div>
     </>)}
     </>
      
     
   )
}
