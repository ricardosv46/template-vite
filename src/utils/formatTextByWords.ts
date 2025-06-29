export const formatTextByWords = (text: string, num: number, replace: string = '<br/>'): string => {
    if (!text) return ''

    const words = text.split(' ')
    let formattedText: string[] = []

    for (const word of words) {
        if (word.length > num) {
            let sliceInit = 0
            let sliceEnd = num

            while (sliceInit < word.length) {
                const letters = word.slice(sliceInit, sliceEnd)
                formattedText.push(letters)

                sliceInit += num
                sliceEnd += num
                if (letters.length === num) {
                    formattedText.push(replace)
                }
            }
        } else {
            formattedText.push(word)
        }
    }

    return formattedText
        .map((i) => i.replaceAll('-', '&#8209;'))
        .join(' ')
        .trim()
}
