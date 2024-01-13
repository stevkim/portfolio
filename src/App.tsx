import Navbar from './components/Navbar';
import Home from './containers/Home';
import useScroll from './hooks/useScroll';
import Scroll from './components/Scroll';

function App() {
  const showScroll = useScroll();

  return (
    <>
      <Navbar />
      <Home />
      {showScroll && <Scroll />}
    </>
  )
}

export default App
