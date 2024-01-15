import { useState, useEffect } from "react";

interface Props {
  images: string[];
}

const ImageCarousel = ({ images } : Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let nextIndex = index + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    const setNext = setTimeout(() => {
      setIndex(nextIndex);
    }, 3000);

    return () => clearTimeout(setNext);
  }, [index])

  return <img width='300px' height='300px' className="w-[90%] md:w-auto h-auto md:h-[250px] shadow-lg" src={images[index]} alt='Project Screenshots' />
};

export default ImageCarousel;