import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { Module } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";

const loginModule: Module<ILoginState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };
  
  export default loginModule;