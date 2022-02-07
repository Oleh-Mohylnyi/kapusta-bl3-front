import React from 'react';
import s from './PageContainer.module.scss'

function PageContainer({ children }) {

  return (
    <div className={s.container}>      
      {children}
      {/* <div className={s.greyRectangle}></div> */}
    </div>
  );
}

export default PageContainer;