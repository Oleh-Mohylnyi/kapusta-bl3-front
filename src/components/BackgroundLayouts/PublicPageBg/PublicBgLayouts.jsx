import React from "react";
// import CabbageGroup from "../../../images/background/cabbage-svg-group.svg";
import CabbageNonRotate from "../../../images/background/cabbage-svg-one-r0.svg";
// import CabbageHalfTurn from "../../../images/background/cabbage-svg-one-r-180.svg";
import CabbageQuarterTurn from "../../../images/background/cabbage-svg-one-r-90.svg";
import CabbageShadow from "../../../images/background/cabbage-svg-shadow.svg";
import s from "./PublicBgLayouts.module.scss";

function BgLayout() {
  // console.log('screenWidth :>> ', screenWidth);
  const screenWidth = window.screen.width;
  return (
    <>
      <span className={s.topCabbage}></span>
      {screenWidth < 768 ? (
        <>
          {/* <img
            src={CabbageHalfTurn}
            className={s.mobileTopCabbage}
            alt="CabbageHalfTurn"
          /> */}
          
          <img
            src={CabbageNonRotate}
            className={s.mobileBottomCabbage}
            alt="CabbageNonRotate"
          />
        </>
      ) : (
          <>
            {/* <img
            src={CabbageGroup}
            className={s.TopCabbageGroup}
            alt="CabbageTopGroup"
            /> */}
            {/* <span className={s.TopCabbageGroup}></span> */}
          <img
            src={CabbageNonRotate}
            className={s.firstBottomCabbage}
            alt="CabbageNonRotate"
          />
          <img
            src={CabbageShadow}
            className={s.firstBottomCabbageShadow}
            alt="CabbageShadow"
          />
          <img
            src={CabbageQuarterTurn}
            className={s.secondBottomCabbage}
            alt="CabbageRotate-90"
          />
          <img
            src={CabbageShadow}
            className={s.secondBottomCabbageShadow}
            alt="CabbageShadow"
          />
        </>
      )}
    </>
  );
}

export default BgLayout;
