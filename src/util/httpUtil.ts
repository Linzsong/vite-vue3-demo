import axios, { AxiosRequestConfig, AxiosInstance } from "axios"

class HttpRequest {
  public baseURL = import.meta.env.DEV ? "api" : "/"
  public timeout = 10000

  // 每次请求都创建一个独一无二的实例 ， 为了保证 请求之间是互不干扰的
  public request(options: AxiosRequestConfig) {
    const instance = axios.create(options)
    options = Object.assign({
      baseURL: this.baseURL,
      timeout: this.timeout
    })
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
  // public get() {}
}

export default new HttpRequest()
