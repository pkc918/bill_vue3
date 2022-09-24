import request from "./request";

// login
export const login = (url: string, method: string = 'GET', data: {}) => {
   return request(url, method, data)
}