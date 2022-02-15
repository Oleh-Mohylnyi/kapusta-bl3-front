import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Balance from '../Balance';
import StatisticsLink from '../StatisticsLink';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from './BalanceNavigation.module.css';
import BalanceTitle from "../BalanceTitle";
import Button from "../Button";


export default function BalanceNavigation () {
 const windowSize = useWindowDimensions();
 const desktopAndTabletView = windowSize.width >= 768;
//   const mobileView = windowSize.width < 767.98;






   return (

   
      
      <>
      {desktopAndTabletView ? (
         
         <>
              <div className={s.wrapper}>
                 <BalanceTitle/>

               <Balance />
               <Button />
              
               <StatisticsLink />
               </div>
               </>
            //   onInputChange={inputChange} currentBalance={balance} onHandleSubmit={handleSubmit}
      ) :
     (<>
     <div className={s.mobileWrapper}>
     <StatisticsLink />
     <BalanceTitle/>
     <div className={s.formWrapper}>
     <Balance />
     <Button />
     </div>
     </div>
     </>)}
     </>
      
     
   )
}
