import { User } from "@/models/user";


export interface ILoginState {
  user: User[];
  token: null;
}

function state(): ILoginState {
  return {
    user: [],
    token: null,
  };}

export default state;
