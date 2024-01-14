import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from '@tanstack/react-router';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
