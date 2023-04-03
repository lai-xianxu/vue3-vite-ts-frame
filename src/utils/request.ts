import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

const service = axios.create({
  timeout: 12000,
});

/* 请求拦截器 */
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 模拟添加请求头
    config.headers['X-Access-Token'] =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzg4NTUxODgsInVzZXJuYW1lIjoiMTk2NzMyMzk0OTcifQ';
    // 请求成功处理
    return config;
  },
  (error: AxiosError) => {
    // 请求失败处理
    return Promise.reject(error);
  },
);

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 响应成功处理
    return response.data;
  },
  (error: AxiosError) => {
    // 响应失败处理
    return Promise.reject(error);
  },
);

/* 导出常用函数 */
export class Http {
  static send(config: AxiosRequestConfig, loading?: boolean) {
    if (loading) {
      // 这里做loading
    }
    return service(config)
      .then((res: any) => {
        return res;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {});
  }

  static get<T = any>(url: string, params = {}, loading = false): Promise<T> {
    const config = {
      method: 'get',
      url,
      params,
    };
    return Http.send(config, loading);
  }

  static post<T = any>(url: string, data = {}, loading = false): Promise<T> {
    const config = {
      method: 'post',
      url,
      data,
    };
    return Http.send(config, loading);
  }

  static put<T = any>(
    url: string,
    query = { data: {}, params: {} },
    loading = false,
  ): Promise<T> {
    const config = {
      method: 'put',
      url,
      data: query.data,
      params: query.params,
    };
    return Http.send(config, loading);
  }

  static _delete<T = any>(url: string, data = {}, loading = false): Promise<T> {
    const config = {
      method: 'delete',
      url,
      data,
    };
    return Http.send(config, loading);
  }
}

export default service;
