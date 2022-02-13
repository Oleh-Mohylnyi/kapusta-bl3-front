import axios from "axios";
// axios.defaults.baseURL = "https://kapusta-smart-finances.herokuapp.com/";
axios.defaults.baseURL = 'http://localhost:4000/'

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
  return result.data.data;
}

export async function login(user) {
  const result = await axios.post("api/auth/login ", user);
  token.set(result.data.data.token);
  return result.data.data;
}

export async function logout() {
  await axios.post("api/auth/logout");
  token.unset();
}

export async function currentUser(userToken) {
  token.set(userToken);
  const result = await axios.get("/users/current");
  return result.data.data;
}

export async function getGoogleUser(email) {
  // const result = await axios.get(`api/auth/${email}`)
  // token.set(result.data.user.token)
  // return result.data
  const { data } = await axios.get(`api/auth/${email}`)
  console.log(data);
  token.set(data.user.token)
  return data
}

// export async function verification(user) {
//   const result = await axios.post('api/users/verify/:token', user);
//   console.log(result);
//   token.set(result.data.token);
//   console.log(result.data.token);
//   return result.data;
// }
