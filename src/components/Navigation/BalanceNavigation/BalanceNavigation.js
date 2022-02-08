import Balance from '../../Balance';
import StatisticsLink from '../../StatisticsLink';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import s from './BalanceNavigation.module.css';


export default function BalanceNavigation () {
 const windowSize = useWindowDimensions();
 const desktopAndTabletView = windowSize.width >= 768;
//   const mobileView = windowSize.width < 767.98;

   return (
      
      <>
      {desktopAndTabletView ? (
         
         <>
              <div className={s.wrapper}>
               <Balance />
              
               <StatisticsLink />
               </div>
               </>
              
      ) :
     (<><StatisticsLink /><Balance /></>)}
     </>
      
     
   )
}
