import Balance from '../../components/Balance';
import StatisticsLink from '../../components/StatisticsLink';
import useWindowSize from '../../hooks/useWindowSize';
import s from './BalanceView.module.css';


export default function BalanceView () {
 const windowSize = useWindowSize();
 const desktopAndTabletView = windowSize.width >= 768;
 
 const mobileView = windowSize.width < 767.98;

   return (
      
      <>
      {desktopAndTabletView && (
         
         <>
              <div className={s.wrapper}>
               <Balance />
              
               <StatisticsLink />
               </div>
               </>
              
      )}
      {mobileView && (
         <><StatisticsLink /><Balance /></>
      )}
     </>
      
     
   )
}