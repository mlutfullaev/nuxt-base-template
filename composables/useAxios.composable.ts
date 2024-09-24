import type { AxiosResponse } from 'axios'
import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
  // const { currentSession, signOut } = useAmplify()
  const service = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  service.interceptors.request.use(
    async (config) => {
      // const session = await currentSession()
      // const token = session?.tokens?.accessToken?.toString()
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    (error) => Promise.reject(error.response)
  )

  service.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      if ([200, 201, 202].includes(response.status)) {
        return response
      }
      throw new Error(response.status.toString())
    },
    (error) => {
      if (error.response.status === 401) {
        // signOut()
        useRouter().go(0)
      }
      return Promise.reject(error)
    }
  )

  return service
}

export const useAxios = () => {
  const { public: axiosConfig } = useRuntimeConfig()
  const service = createAxiosInstance(axiosConfig.apiBaseUrl)

  return {
    service,
  }
}