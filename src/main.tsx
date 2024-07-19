import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
// import ErrorBoundary from './pages/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
)
