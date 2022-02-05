
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
  
  
import DiagramMobile from "../components/StatisticDiagram/DiagramMobile"; 
import DiagramContainer from "../components/StatisticDiagram/DiagramContainer";

const Header = lazy(() =>
  import('../components/Header/Header' /* webpackChunkName: "header-view" */),
)
const HomeView = lazy(() =>
  import('../views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
)
// const RegisterView = lazy(() =>
//   import(
//     '../views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
//   ),
// )
const MainView = lazy(() =>
  import('../views/MainView/MainView' /* webpackChunkName: "contacts-view" */),
)
const StatisticsView = lazy(() =>
  import(
    '../views/StatisticsView/StatisticsView' /* webpackChunkName: "login-view" */
  ),
)

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(getIsAuth)
  const token = useSelector(getToken)
  const isFetchingCurrent = useSelector(getIsFetchingCurrent)

  useEffect(() => {
  token && dispatch(currentUser())
    
  let width = window.innerWidth;  
    
  }, [dispatch])

  return (
    <>
    <div className="app">
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="orange" height={80} width={80} />
        }>
          
        <Header isAuth={isAuth} />
        
        {isFetchingCurrent ? (
          <Loader type="ThreeDots" color="orange" height={80} width={80} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<PublicRoute isAuth={isAuth} component={HomeView} />}
            />
            <Route
              path="/main"
              element={<PublicRoute isAuth={isAuth} component={MainView} />}
            />
            <Route
              path="/statistics"
              element={
                <PublicRoute isAuth={isAuth} component={StatisticsView} />}
            />
          </Routes>
        )}
      </Suspense>

      <ToastContainer autoClose={3000} />

        
      </div>
      {width < 768 ? <DiagramMobile /> : <DiagramContainer />}
      </>
  );
}

export default App
