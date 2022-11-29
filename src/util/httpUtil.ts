import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
export interface ResponseData<T> {
  code: number
  data?: T
  msg?: string
}
class HttpRequest {
  public baseURL = import.meta.env.DEV ? "/" : "/"
  public timeout = 10000

  // 每次请求都创建一个独一无二的实例 ， 为了保证 请求之间是互不干扰的
  public request(options: AxiosRequestConfig) {
    const instance = axios.create(options)
    options = Object.assign(
      {
        baseURL: this.baseURL,
        timeout: this.timeout
      },
      options
    )

    this.setInterceptors(instance)
    return instance(options)
  }
  setInterceptors(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers!["token"] = "bearer token"
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    // 响应拦截器
    instance.interceptors.response.use(
      (res) => {
        const { code } = res.data
        if (code !== 0) {
          return Promise.reject(res)
        }

        // 401 403 404
        return res
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
  public get<T>(url: string, params: unknown): Promise<ResponseData<T>> {
    return new Promise((resolve, reject) => {
      this.request({
        method: "GET",
        url: url,
        params: params
      })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err || err.msg)
        })
    })
  }
  public post<T>(url: string, data: unknown): Promise<ResponseData<T>> {
    return new Promise((resolve, reject) => {
      this.request({
        method: "POST",
        url: url,
        data: data
      })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err || err.msg)
        })
    })
  }
}

export default new HttpRequest()
