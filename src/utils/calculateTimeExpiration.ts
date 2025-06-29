export const calculateTimeExpiration = (minutesToAdd: number = 5): number => {
    const ahora = new Date()
    const horaPeru = new Date(ahora.getTime()) // Current time in Peru timezone
    return Math.floor(horaPeru.getTime() / 1000) + minutesToAdd * 60
}
