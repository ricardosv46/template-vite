export const calculateDiffSeconds = (timestampApi: number, timestampActual: number) => {
    if (!timestampApi) {
        return null
    }
    const diferenciaEnMilisegundos = timestampApi - timestampActual
    const diff = Math.floor(diferenciaEnMilisegundos)
    return diff
}
