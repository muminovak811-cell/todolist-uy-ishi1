import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Sass/main.scss'
import App from './Components/App.jsx'
import ContextProvider from './Components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)
