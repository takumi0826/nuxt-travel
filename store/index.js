export const state = () => ({
  currentTab: 'cooking'
})

export const mutations = {
  tabChange(state, val) {
    state.currentTab = val
  }
}
