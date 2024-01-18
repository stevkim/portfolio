import { useState, useCallback, useEffect } from "react";

const useResize = () => {
  const [size, setSize] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768)  {
      setSize(true);
    } else {
      setSize(false);
    }
  }, [size])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return size;
}

export default useResize;