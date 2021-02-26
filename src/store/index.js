import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login(contex) {
      contex.commit('login');
    },
    logout(contex) {
      contex.commit('logout');
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
