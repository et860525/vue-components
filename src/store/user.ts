import { Module } from 'vuex';

export type User = {
  name: string;
  age: number;
  gender: string;
};

export const userModule: Module<User, any> = {
  namespaced: true,
  state: (): User => ({
    name: 'Paul',
    age: 80,
    gender: 'male',
  }),
  getters: {
    getUserInfo: (state) => {
      return state.name + ' is ' + state.age + ' years old.';
    },
  },
};
