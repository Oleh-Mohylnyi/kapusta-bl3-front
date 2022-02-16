import React from "react";
import Balance from '../Balance';
import StatisticsLink from '../StatisticsLink';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from './BalanceNavigation.module.css';
import BalanceTitle from "../BalanceTitle";
// import Button from "../Button";


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

               <Balance currency="UAH"/>
               {/* <Button /> */}
              
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
     <Balance currency="UAH"/>
     {/* <Button /> */}
     </div>
     </div>
     </>)}
     </>
      
     
   )
}
