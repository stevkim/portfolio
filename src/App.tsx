import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
      <Toaster position='top-center' />
    </>
  )
}

export default App
