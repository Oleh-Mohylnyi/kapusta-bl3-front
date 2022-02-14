import React from 'react'
import './App.css'
import Loader from 'react-loader-spinner'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../routes/PrivateRoute'
import { PublicRoute } from '../routes/PublicRoute'

import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../redux/auth/operations'
import { useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { getIsAuth } from '../redux/auth/selectors'
import { getToken } from '../redux/auth/selectors'
import { getIsFetchingCurrent } from '../redux/auth/selectors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { Navigation } from "../components/Navigation/Navigation";

const Header = lazy(() =>
  import("../components/Header/Header" /* webpackChunkName: "header-view" */)
);
const HomeView = lazy(() =>
  import("../views/HomeView/HomeView" /* webpackChunkName: "home-view" */)
);

const MainView = lazy(() =>
  import("../views/MainView/MainView" /* webpackChunkName: "main-view" */)
);
const StatisticsView = lazy(() =>
  import(
    "../views/StatisticsView/StatisticsView" /* webpackChunkName: "login-view" */
  )
);

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const token = useSelector(getToken);
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);
  useEffect(() => {
    token && dispatch(currentUser());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="appContainer">
      {/* <Navigation /> */}
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#ff751d" height={80} width={80} />
        }
      >
        <Header isAuth={isAuth} />
        {isFetchingCurrent ? (
          <Loader type="ThreeDots" color="#ff751d" height={80} width={80} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<PublicRoute isAuth={isAuth} component={HomeView} />}
            />

              
            <Route
              path="/main"
              element={<PrivateRoute isAuth={isAuth} component={MainView} />}
              >
              {/* <Route path="income" element={<IncomeView />} />
              <Route path="expenses" element={<ExpensesView />} /> */}
               </Route>
            <Route
              path="statistics"
              element={
                <PrivateRoute isAuth={isAuth} component={StatisticsView} />
              }
              >
              
            </Route>

              
              {/* <Route
              path="/main"
              element={<PrivateRoute isAuth={isAuth} component={MainView} />}
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute isAuth={isAuth} component={StatisticsView} />
              }
            >
              <Route path="income" element={<ReportIncome />} />
              <Route path="expenses" element={<ReportExpenses />} />
            </Route> */}

              
          </Routes>
        )}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;