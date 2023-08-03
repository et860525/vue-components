import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

interface User {
	name: string,
	age: number,
	gender: string
}

export interface State {
  count: number,
	user: User,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
		user: {
			name: 'Paul',
			age: 80,
			gender: 'male'
		}
  },
	getters: {
		getUserInfo: state => {
			return state.user.name + ' is ' + state.user.age + ' years old.'
		}
	},
	mutations: {
		increment(state: State) {
			state.count++;
		}
	},
})