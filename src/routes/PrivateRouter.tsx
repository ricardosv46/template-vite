import { Spinner } from '@/components/common/Spinner/Spinner'
import HomePage from '@/pages/private/home/HomePage'
import { useAuth } from '@/store/auth'
import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

export const PrivateRouter = () => {
  const { isAuth } = useAuth()

  if (!isAuth) return <Navigate to="/auth/login" />

  return (
    <Suspense fallback={<Spinner type="short" />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Suspense>
  )
}
