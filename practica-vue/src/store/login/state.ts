export interface ILoginState {
  token: null;
}

function state(): ILoginState {
  return {
    token: null,
  };
}

export default state;
