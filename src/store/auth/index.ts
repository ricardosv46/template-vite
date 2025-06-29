import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthStore {
  token: string
  isAuth: boolean
  loading: boolean
  loginAction: (token: string) => void
  logoutAction: () => void
  setLoading: (loading: boolean) => void
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      token: '',
      isAuth: false,
      loading: true,
      loginAction: (token: string) => set({ isAuth: true, token }),
      logoutAction: () => {
        set({
          token: '',
          isAuth: false,
          loading: false
        })
      },
      setLoading: (loading: boolean) => set({ loading })
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ ...state })
    }
  )
)
