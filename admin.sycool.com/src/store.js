import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		baseURL: 'http://10.3.132.244:12345'
  },
	getters: {
		baseURL(state){
			return state.baseURL;
		}
	}
})
