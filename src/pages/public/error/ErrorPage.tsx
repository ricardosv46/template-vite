import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Ilustración de error */}
        <div className="mb-8">
          <div className="relative mx-auto w-64 h-64">
            {/* Círculo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>

            {/* Icono principal */}
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-8xl font-bold text-gray-300 mb-2">404</div>
                <div className="h-16 w-16 mx-auto bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 h-8 w-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-4 -left-4 h-6 w-6 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -left-8 h-4 w-4 bg-green-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/2 -right-8 h-4 w-4 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Contenido de error */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">¡Ups! Página no encontrada</h1>

          <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>

          {/* Código de error estilizado */}
          <div className="inline-block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">Error 404 - Page Not Found</div>
        </div>

        {/* Acciones */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Volver al inicio
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Página anterior
            </button>
          </div>

          {/* Enlaces adicionales */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">¿Necesitas ayuda? Prueba estos enlaces:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Centro de ayuda
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Contacto
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Mapa del sitio
              </a>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Si crees que esto es un error, por favor contacta al soporte técnico</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
