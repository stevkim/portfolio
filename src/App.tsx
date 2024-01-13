import Navbar from './components/Navbar';
import useScroll from './hooks/useScroll';
import Scroll from './components/Scroll';
import { Outlet } from '@tanstack/react-router';

function App() {
  const showScroll = useScroll();

  return (
    <>
      <Navbar />
      <Outlet />
      {showScroll && <Scroll />}
    </>
  )
}

export default App
