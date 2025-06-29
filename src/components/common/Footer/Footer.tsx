'use client'

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
            <span className="text-sm text-gray-600">© 2024 ONPE. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Política de privacidad
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Términos de servicio
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
