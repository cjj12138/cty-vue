

import axios from 'axios'
import request from "request";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

let veRiFi = res =>{
  if(res.data.code==1){
    console.log(res.msg)
  }else{
    return res.data;
  }
};


/*用户登录*/
export const userLogin = params => {
  return axios.post(
    '/user/login',
    params
  ).then(
    res => veRiFi(res)
  )
};

/*
获取用户信息
 */
export const getUserInfo = params =>{
  return axios.post(
      '/user/getUserInfo',
      params
  ).then(
      res=>veRiFi(res)
  )
}

export const getAllUser = params =>{
  return axios.post(
      '/admin/getAllUser',
      params
  ).then(
      res=>veRiFi(res)
  )
}


export const updateUserInfo = param =>{
  return axios.post('/user/updateUserInfo',param).then(
      res=>veRiFi(res)
  )
}

export const uploadShoes = param =>{
  return axios.request({
    method: 'post',
    // 上传地址
    url: '/user/uploadShoes',
    // 定义上传头
    headers: {'Content-Type':'multipart/form-data'},
    data: param
  });
}

export const getAllGoodsWithUser =param =>{
  return axios.post('/user/getAllGoods',param).then(
      res=>veRiFi(res)
  )
}

export const getGoodByAdmin =param =>{
  return axios.post('/admin/getGoodByAdmin',param).then(
      res=>veRiFi(res)
  )
}

export const updateGoodStatus = params =>{
  return axios.post(
      'admin/updateGoodStatus',
      params
  ).then(
      res=>veRiFi(res)
  )
}

export const getAppraisalShoes = params =>{
  return axios.post(
      'admin/getAppraisalShoes',
      params
  ).then(
      res=>veRiFi(res)
  )
}

export const getAllGoodsMorePic = param =>{
  return axios.post('/user/getAllGoodsMorePic',param).then(
      res=>veRiFi(res)
  )
}

export const getUserRoleIdWithAdmin = param =>{
  return axios.post('/admin/getRoleId',param).then(res=>veRiFi(res))
}

export const creatOrder = param=>{
  return axios.post('/user/creatOrder',param).then(res=>veRiFi(res))
}

export const myCollection = param =>{
  return axios.post('/user/myCollection',param).then(res=>veRiFi(res))
}

export const  getMyfvt =param =>{
  return axios.post('/user/getMyfvt',param).then(res=>veRiFi(res))
}

export const deleteMyLoveShoes = param =>{
  return axios.post('/user/deleteMyLove',param).then(res=>veRiFi(res))
}

export const getSystemNotification = param =>{
  return axios.post('/user/getSystemNotification',param).then(res=>veRiFi(res))
}
