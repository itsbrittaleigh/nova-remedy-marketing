const state = {
  menuIsOpen: false,
  menuIsTransparent: true,
};

const getters = {
  menuIsOpen: state => state.menuIsOpen,
  menuIsTransparent: state => state.menuIsTransparent,
};

const actions = {
  toggleMenu(context) {
    context.commit('toggleMenu');
  },
  closeMenu(context) {
    context.commit('closeMenu');
  },
  transparentizeMenu(context) {
    context.commit('transparentizeMenu');
  },
  opacifyMenu(context) {
    context.commit('opacifyMenu');
  },
};

const mutations = {
  toggleMenu(state) {
    state.menuIsOpen = !state.menuIsOpen;
  },
  closeMenu(state) {
    state.menuIsOpen = false;
  },
  transparentizeMenu(state) {
    state.menuIsTransparent = true;
  },
  opacifyMenu(state) {
    state.menuIsTransparent = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};