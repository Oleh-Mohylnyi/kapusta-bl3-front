import React from "react";
import CabbageGroup from '../../../images/background/cabbage-svg-group.svg'
import CabbageNonRotate from "../../../images/background/cabbage-svg-one-r0.svg";
import CabbageQuarterTurn from "../../../images/background/cabbage-svg-one-r-90.svg";
import CabbageShadow from "../../../images/background/cabbage-svg-shadow.svg";
import s from "./PrivateBgLayouts.module.scss";

function BgLayout() {
  const screenWidth = window.screen.width;
  return (
    <>
      { (screenWidth >= 768 && screenWidth<1280) && (
        <>
          <img
            src={CabbageNonRotate}
            className={s.firstTabletCabbage}
            alt="CabbageNonRotate"
          />
          <img
            src={CabbageShadow}
            className={s.firstTabletCabbageShadow}
            alt="CabbageShadow"
          />
          <img
            src={CabbageQuarterTurn}
            className={s.secondTabletCabbage}
            alt="CabbageRotate-90"
          />
          <img
            src={CabbageShadow}
            className={s.secondTabletCabbageShadow}
            alt="CabbageShadow"
          />
        </>)}
      {(screenWidth >= 1280) && <img src={CabbageGroup} className={s.cabbageGroup} alt="CabbageGroup" />  
      } 
    </>
  );
}

export default BgLayout;
