import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

interface optionType {
   url: string,
   method: string,
   params?: {},
   data?: {}
}

export default function request(url: string, type = "GET", data = {}): Promise<Function> {
   return new Promise((resolve, reject) => {
      let option: optionType = {
         url,
         method: type
      }
      // get 请求传 params，post请求传 data
      if (type.toLowerCase() === 'get') {
         option = { ...option, params: data }
      } else {
         option = { ...option, data: qs.stringify(data) }
      }
      // 有 token 就设置 token
      let token = localStorage.getItem('bill_token');
      if (token) {
         axios.defaults.headers.common['Authorization'] = token;
      }

      axios(option).then(res => {
         console.log("??????", res);
         resolve(() => {
            return res.data;
         })
      }).catch(err => {
         reject(err)
      })
   })
}