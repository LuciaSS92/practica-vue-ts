import { Module } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


const loginModule: Module<IUserState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };
  
  export default loginModule;