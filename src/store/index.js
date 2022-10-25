import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName:"임시"
  },
  getters: { // 사용자가 연산한 결과를 반환받고 싶을떄 사용
  },
  mutations: { // state의 상태를 바꾸기 위해 사용
    setUserName(state, name){
      console.log("vuex actions setUserName");
      state.userName = name;
    }
  },
  actions: { // 비동기처리(rest api)에 사용
  },
  modules: { // 여거 store를 관리하고 싶을 떄 사용
  },
});
