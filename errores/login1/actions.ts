import fakeShopApi from "@/api/fakeShopApi";
import { User } from "@/models/user";
import { ActionTree } from "vuex";
import { IState } from "..";
import { AxiosResponse } from "axios";
import { ILoginState } from "./state";

const actions: ActionTree<ILoginState, IState> = {
async fetchUserById({ commit }, userId: number) {
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>(
      `/users/${userId}`
    );
    
    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedUser", data);
  },
}

export default actions;