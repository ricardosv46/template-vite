import { useState, useEffect } from 'react'

interface WindowSize {
    width: number | undefined
    height: number | undefined
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    screenSize: 'mobile' | 'tablet' | 'desktop'
}

export function useWindowSize(): WindowSize {
    // Inicializar con undefined para evitar renderizado en servidor
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        screenSize: 'desktop'
    })

    useEffect(() => {
        // Handler para actualizar el estado
        function handleResize() {
            const width = window.innerWidth
            const height = window.innerHeight

            // Definir breakpoints
            const isMobile = width < 1024
            const isTablet = width >= 1024 && width < 1650
            const isDesktop = width >= 1650
            // Determinar el tamaño de pantalla
            let screenSize: 'mobile' | 'tablet' | 'desktop' = 'desktop'
            if (isMobile) screenSize = 'mobile'
            else if (isTablet) screenSize = 'tablet'
            else screenSize = 'desktop'

            setWindowSize({
                width,
                height,
                isMobile,
                isTablet,
                isDesktop,
                screenSize
            })
        }

        // Agregar event listener
        window.addEventListener('resize', handleResize)

        // Llamar al handler inmediatamente para establecer el tamaño inicial
        handleResize()

        // Limpiar event listener al desmontar
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Array vacío significa que este efecto se ejecuta solo una vez al montar

    return windowSize
}
