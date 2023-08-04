import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { countModule } from './buttonCount';
import { userModule } from './user';

const modules = {
  countModule,
  userModule,
};

type modulesState = {
  [key in keyof typeof modules]: Exclude<Exclude<(typeof modules)[key]['state'], undefined>, () => any>;
};

export interface State extends modulesState {
  greeting: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: {
    countModule: countModule,
    userModule: userModule,
  },
  state: {
    greeting: 'Hello',
  },
});

export function useStore() {
  return baseUseStore(key);
}
