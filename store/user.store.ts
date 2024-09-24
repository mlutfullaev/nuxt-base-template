import { defineStore } from 'pinia'

interface IUserState {
  name: string,
  email: string,
  password: string,
}

const defaultState: IUserState = {
  name: 'Maga',
  email: 'email@gmail.com',
  password: 'drowssap',
}

export const useUserManager = defineStore('user', {
  state: () => ({ ...defaultState }),
  actions: {
    setPassword(newPassword: string) {
      this.password = newPassword
    }
  },
  getters: {
    getName: (state: IUserState) => state.name,
  }
})