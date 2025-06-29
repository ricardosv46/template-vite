export const generateRandomKeyboardLayout = (validate: boolean = false) => {
    const numbers = Array.from({ length: 10 }, (_, i) => i.toString())

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
    }

    return [
        `${numbers[0]} ${numbers[1]} ${numbers[2]}`,
        `${numbers[3]} ${numbers[4]} ${numbers[5]}`,
        `${numbers[6]} ${numbers[7]} ${numbers[8]}`,
        `${numbers[9]} {backspace} ${validate ? '' : '{ent}'}`
    ]
}
