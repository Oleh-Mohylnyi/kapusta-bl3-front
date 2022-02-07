// export const getUserEmail = state => state.auth.user.email;
// export const getIsAuth = state => state.auth.isAuth;
// export const getToken = state => state.auth.token;
// export const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

export const getIsAuth = (state) => state.auth.isAuth

export const getUserEmail = (state) => state.auth.user.email

export const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser

export const getToken = (state) => state.auth.token

export const getAuthenticated = (state) => state.auth.isAuthenticated


// const authSelectors = {
//     getIsAuth,
//     getUserName,
//     getIsFetchingCurrent,
//     getToken,
// };
// export default authSelectors;
