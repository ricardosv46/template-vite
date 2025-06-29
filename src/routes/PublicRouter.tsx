import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Spinner } from '@/components/common/Spinner/Spinner'
import LoginPage from '@/pages/public/login/LoginPage'
import { useAuth } from '@/store/auth'

export const PublicRouter = () => {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to="/" replace />

  return (
    <Suspense fallback={<Spinner type="short" />}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Suspense>
  )
}
