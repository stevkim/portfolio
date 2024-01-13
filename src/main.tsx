import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, Router, RootRoute, Route } from '@tanstack/react-router'
import Home from './containers/Home.tsx'
import Contact from './containers/Contact.tsx'

const rootRoute = new RootRoute({
  component: App
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact
})

const routeTree = rootRoute.addChildren([homeRoute, contactRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
