export const state = () => ({
  tabNumber: 1
})

export const mutations = {
  tabChange(state, num) {
    state.tabNumber = num
  }
}
