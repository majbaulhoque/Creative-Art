import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route} />
  </StrictMode>,
)
