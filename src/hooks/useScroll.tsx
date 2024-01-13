import { useState, useCallback, useEffect } from "react";

const useScroll = () => {
  const [visible, setVisible] = useState(true);

  const scroll = useCallback(() => {
    if (window.scrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, [scroll]);

  return visible;
}

export default useScroll;