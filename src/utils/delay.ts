/**
 * Función que retorna una promesa que se resuelve después de un tiempo específico
 * @param seconds - Tiempo de espera en segundos
 * @returns Promise que se resuelve después del tiempo especificado
 */
export const delay = (seconds: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}
