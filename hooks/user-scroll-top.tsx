import React, { useEffect, useState } from "react";

const UseScrollTop = (threshold = 10) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return scroll;
};

export default UseScrollTop;
