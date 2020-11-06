import { set } from '@/utilits/vuex'
export const state = () => ({
  drawer: false,
})

export const getters = {
  drawer(state) {
    return state.drawer
  },
}
export const mutations = {
  setDrawer: set('drawer'),
}
