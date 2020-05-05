const state = () => ({
  tagsList: [],
  menusList: [],
  tocList: [],
  tocState: '',
  archiveListByMonth: [],
  articleTabs: [],
  hideSideBar: false
})

const mutations = {
  setTagsList(state, val) {
    state.tagsList = val
  },
  setMenusList(state, val) {
    state.menusList = val
  },
  setHideSideBar(state, val) {
    state.hideSideBar = val
  },
  setTocState(state, val) {
    state.tocState = val
  },
  setTocList(state, val) {
    state.tocList = val
  },
  setArchiveListByMonth(state, val) {
    state.archiveListByMonth = val
  },
  setArticleTabs(state, val) {
    state.articleTabs = val
  }
}

const actions = {
  async nuxtServerInit({
    commit
  }, { app }) {
    const {data: {result, data}} = await app.$axios.get('/blog/getTagsList')
    commit('setTagsList', result ? data : [])

    const {data:{result: result1, data: data1}} = await app.$axios.get('/blog/getMenusList')
    commit('setMenusList', result1 ? data1 : [])

    const {data:{result: result2, data: data2}} = await app.$axios.get('/blog/getArchiveListByMonth')
    commit('setArchiveListByMonth', result2 ? data2 : [])

    const {data:{result: result3, data: data3}} = await app.$axios.get('/blog/getArticleTabs')
    commit('setArticleTabs', result3 ? data3 : [])
  }
}

export default {namespaced: true, state, mutations, actions}
