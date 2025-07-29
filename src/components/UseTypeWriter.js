import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 150) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (index < text.length) {
          return prev + text[index];
        } else {
          setIndex(0);
          return "";
        }
      });
      setIndex((prevIndex) => (prevIndex + 1) % (text.length + 1));
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return displayed;
};
