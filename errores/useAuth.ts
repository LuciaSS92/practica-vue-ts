import axios from "axios";

const ENDPOINT_PATH = "https://api.escuelajs.co/api/v1/auth/login";

export default {
  setUserLogged(userLogged: any) {
    localStorage.set("userLogged", userLogged);
  },
  getUserLogged() {
    return localStorage.get("userLogged");
  },
  login(email: string, password: string) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  deleteUserLogged() {
    localStorage.remove('userLogged');
  }
};