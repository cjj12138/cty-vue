

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

let veRiFi = res =>{
  if(res.data.code==-1){

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
