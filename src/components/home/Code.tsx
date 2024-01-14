import { useState, useEffect } from 'react';

const text = '< Software Engineer />';

const Code = () => {
  const [activeText, setActiveText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const next = setTimeout(() => {
        setActiveText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100)

      return () => clearTimeout(next);
    }
  }, [currentIndex, activeText])

  return <code className=''>{`${activeText}`}</code>
}

export default Code;