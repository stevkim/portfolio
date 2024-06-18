import { useState, useEffect } from "react";

const text = "< Software Engineer />";

const Code = () => {
  const [activeText, setActiveText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const next = setTimeout(() => {
        setActiveText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(next);
    }
  }, [currentIndex, activeText]);

  return <code className="leading-8">{`${activeText}`}</code>;
};

export default Code;
