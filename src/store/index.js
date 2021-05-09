import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
import tagsView from './modules/tagsView'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIndex:3,
    userInfo:{},
    roleId:-1,
  },
  mutations: {
    userIndex(state,index){
      state.userIndex=index
    },
    userInfo(state,user){
      state.userInfo=user
    },
    roleId(state,roleId){
      state.roleId=roleId
    }
  },
  actions: {
    setUserIndex({commit,state},index){
      commit("userIndex",index);
    },
    setUser({commit,state},user){
      commit("userInfo",user)
    },
    setRoleId({commit,state},roleId){
      commit("roleId",roleId)
    }
  },
  modules: {
    permission,
    user,
    tagsView
  },
  // 定义全局getters 方便访问user 模块的roles
  getters:{
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    getUserIndex(state){
      return state.userIndex
    },
    getUserId(state){
      return state.userInfo
    },
    getRoleId(state){
      return state.roleId
    }
  }
})
