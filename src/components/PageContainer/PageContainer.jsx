import React from 'react';
import s from './PageContainer.module.scss'

function PageContainer({children}) {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
}

export default PageContainer;