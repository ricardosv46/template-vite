import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import { PrivateLayout } from '@/components/common/Layout/PrivateLayout'
import { PublicLayout } from '@/components/common/Layout/PublicLayout'
import { Spinner } from '@/components/common/Spinner/Spinner'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import ErrorPage from '@/pages/public/error/ErrorPage'

export const RootRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner type="full" />}>
        <Routes>
          <Route path="auth/*" element={<PublicLayout />}>
            <Route path="*" element={<PublicRouter />} />
          </Route>

          <Route path="/*" element={<PrivateLayout />}>
            <Route path="*" element={<PrivateRouter />} />
          </Route>

          {/* Ruta especial para DNIe sin layout */}
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
