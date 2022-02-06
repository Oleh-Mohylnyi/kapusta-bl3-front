import React from "react";
import s from "./BackgroundLayouts.module.scss";

function BackgroundLayouts(isAuth) {
  return (    
    <div className={s.bgContainer}>      
      <div className={s.greyRectangle}>
        {/* <div className={s.topBgImage}></div> */}
        {/* {isAuth:} */}
      </div>      
      {/* <div className={s.bottomBgImage}></div> */}
    </div>
    
  );
}

export default BackgroundLayouts;
