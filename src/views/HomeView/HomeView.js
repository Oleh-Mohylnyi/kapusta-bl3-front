import Registration from "../../components/Registration";
import BackgroundImages from "../../components/BackgroundLayouts/PublicPageBg";
// import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import s from "./HomeView.module.scss";

import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux'
// import { authSelectors } from "../../redux/auth";

// import { useEffect } from "react";
// import { authOperations } from '../../redux/auth/index'
import { userFromGoogleAuth } from "../../redux/auth/operations";

// import { useLocation } from 'react-router-dom';

const HomeView = () => {
  const dispatch = useDispatch();

  const token = new URLSearchParams(document.location.search).get("token");

  if (token) {
    dispatch(userFromGoogleAuth(token));
  }

  // useEffect(() => {
  //   dispatch(userFromGoogleAuth(token));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ token]);

  return (
    <>
      <div className={s.container}>
        <Title />
        <Registration />
      </div>
      <BackgroundImages />
    </>
  );
};

export default HomeView;
