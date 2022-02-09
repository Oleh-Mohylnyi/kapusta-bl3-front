import axios from "axios";
axios.defaults.baseURL = "https://kapusta-smart-finances.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function register(user) {
  const result = await axios.post("api/auth/registration", user);
  return result.data;
}

// export async function verification(user) {
//   const result = await axios.post('api/users/verify/:token', user);
//   console.log(result);
//   token.set(result.data.token);
//   console.log(result.data.token);
//   return result.data;
// }

export async function login(user) {
  const result = await axios.post("api/auth/login ", user);
  token.set(result.data.data.token);
  return result.data;
}

export async function currentUser(userToken) {
  token.set(userToken);
  const result = await axios.get("/users/current");
  return result.data;
}

export async function logout() {
  await axios.post("api/auth/logout");
  token.unset();
}
// import axios from 'axios';

// axios.defaults.baseURL = 'https://6193ffd50b39a70017b156b8.mockapi.io/api/contacts';

// const getContacts = () => {
//     return axios.get('/contacts').then(res => console.log(res)).then(res => res.data)
// };

// const postContact = contact => {
//     return axios.post('/contacts', contact).then(({ data }) => data)
// };

// const delContact = id => {
//     return axios.delete(`/contacts/:${id}`).then(res => console.log(res))
// };

// export default { getContacts, delContact, postContact }
