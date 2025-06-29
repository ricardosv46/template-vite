export const errorHandler = (error: any) => {
  if (error?.response?.data?.message === '55_Signature has expired') {
    return 'Tiempo para iniciar sesión expirado'
  }

  if (error?.code === 'ERR_NETWORK') {
    return 'No se pudo acceder al servicio. Verifique su conexión a internet'
  }

  return error?.response?.data?.message ?? 'Ocurrio un error en el servicio, inténtelo de nuevo.'
}
