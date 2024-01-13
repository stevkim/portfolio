import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, Router, RootRoute } from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: App
})

const routeTree = rootRoute.addChildren([]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
