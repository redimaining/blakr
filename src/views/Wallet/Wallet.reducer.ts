import { Wallet } from '../../blockchains/types';

export let initialState: { wallet: Wallet } = {
  wallet: {} as Wallet,
};

const getDefaultState = () => ({
  wallet: {} as Wallet,
});

export type IState = typeof initialState;

export enum IAction {
  SET_WALLET = 'set_wallet',
}
export const componentIsUnmounting = () => {
  initialState = getDefaultState();
};

const actionHandlers = Object.fromEntries(
  Object.values(IAction).map((action) => [action, (_: IState, payload: IState) => ({ ...payload })]),
);

export function reducer(state: IState, { type, payload }: { type: IAction; payload: IState }): IState {
  const actionHandler = actionHandlers[type] || ((state) => state);
  return actionHandler(state, payload);
}