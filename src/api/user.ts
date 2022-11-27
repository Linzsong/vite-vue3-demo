import http from "@/util/httpUtil"

// 封装接口路径
const enum USER_API {
  login = "/login"
}

// 封装用户信息
export interface IUserData {
  userName: string
  password: string
}

// 后续方法可以继续扩展  用户调用的接口
export async function login<T>(data: IUserData) {
  return http.post<T>(USER_API.login, data)
}
