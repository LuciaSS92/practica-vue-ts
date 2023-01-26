import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { State } from './interfaces';
import fakeShopApi from '@/api/fakeShopApi';

// Se encarga de hacer las peticiones asincronas con axios
// Trae las constantes globales
import AuthTypes 


const state: State = {
  user: {},
  token: !!window.localStorage.getItem('_token'),
};
const getters: GetterTree<State, any> = {
  [AuthTypes.getters.getuser]: (state) =>{
    return state.user;
  }
};
const mutations: MutationTree<State> = {
  [AuthTypes.mutations.setuser]: (state, user) =>{
    state.user = user;
  }
}

const actions: ActionTree<State, any> = {
  [AuthTypes.actions.loginuser]: ({ commit }, data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      fakeShopApi
          .post(`api/auth/login`, data)
          .then((res : any) => {
                  commit(AuthTypes.mutations.setuser, res.data.user);
                  window.localStorage.setItem('_token', res.data.access_token);
                  window.location.reload();
                  resolve(res)
              })
          .catch((error: any) => {
              reject(error)
          })
          .finally(() => {
              return;
          });
      });
   
  },
  [AuthTypes.actions.logoutuser]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      fakeShopApi
          .post(`api/auth/logout`)
          .then((res : any) => {
                  commit(AuthTypes.mutations.setuser, {});
                  window.localStorage.removeItem('_token');
                  window.location.reload();
                  resolve(res)
              })
          .catch((error: any) => {
              reject(error)
          })
          .finally(() => {
              return;
          });
      });
  },
  [AuthTypes.actions.registeruser]: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      fakeShopApi
          .post(`api/auth/register`, data)
          .then((res : any) => {
                  commit(AuthTypes.mutations.setuser, res.data.user);
                  window.localStorage.setItem('_token', res.data.access_token);
                  window.location.reload();
                  resolve(res)
              })
          .catch((error: any) => {
              reject(error)
          })
          .finally(() => {
              return;
          });
      });
  }
}

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions,
};