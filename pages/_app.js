import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useStore } from '@store/index'

import 'tailwindcss/tailwind.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
