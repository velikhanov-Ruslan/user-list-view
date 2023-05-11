import axios, { type AxiosResponse } from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

class ApiService {
  public static async get<T = any, R = AxiosResponse<T>>(resource: string): Promise<R> {
    return await axios.get<T, R>(resource)
  }
}

export default ApiService
