export const getIsAuth = state => state.auth.isAuth;

export const getUserName = state => state.auth.user.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getToken = state => state.auth.token;

// const authSelectors = {
//     getIsAuth,
//     getUserName,
//     getIsFetchingCurrent,
//     getToken,
// };
// export default authSelectors;