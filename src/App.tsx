import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RootRouter } from './routes/RootRouter'
import { StoreInitializer } from './components/common/StoreInitializer/StoreInitializer'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: false,
        staleTime: 0,
        gcTime: 0
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <StoreInitializer>
        <RootRouter />
      </StoreInitializer>
    </QueryClientProvider>
  )
}

export default App
