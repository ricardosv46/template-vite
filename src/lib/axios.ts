import axios from 'axios'
import { BASE_URL_BACK } from './envs'

// Crear una instancia de axios con la configuración base
export const apiService = axios.create({
  baseURL: BASE_URL_BACK || ''
})

// Interceptor para agregar el token a las peticiones
apiService.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si no hay conexión a internet
    if (!navigator.onLine) {
      return Promise.reject(error)
    }
    const status = error.response?.status

    // Cerrar sesión si el token es inválido/expirado (401) o acceso denegado (403)
    if (status === 401 || status === 403) {
    }

    return Promise.reject(error)
  }
)
