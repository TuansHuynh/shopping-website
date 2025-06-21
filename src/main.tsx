import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router'
import { ContextProvider } from './context/ContextProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router = {router}/>
    </ContextProvider>
  </StrictMode>,
)
