import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		islogin: false,
		uid: "",
		username: ""
	},
	mutations: {
		setislogin(state, islogin) {
			state.islogin = islogin;
		},
		setuid(state, uid) {
			state.uid = uid;
		},
		setusername(state, username) {
			state.username = username;
		}
	},
	actions: {
		
	},
	getters: {
		getislogin(state) {
			return state.islogin;
		},
		getuid(state) {
			return state.uid;
		},
		getusername(state) {
			return state.username;
		}
	}
})
