import { Module } from 'vuex';

type ICount = {
  count: number;
};

export const countModule: Module<ICount, any> = {
  namespaced: true,
  state: (): ICount => ({
    count: 0,
  }),
  mutations: {
    increment(state: ICount) {
      state.count++;
    },
  },
};
