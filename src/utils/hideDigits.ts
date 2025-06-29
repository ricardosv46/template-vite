export const hideDigits = (strNumero: string): string => {
    let resultado = strNumero[0] + '*****' + strNumero.slice(-3)
    return resultado
}
