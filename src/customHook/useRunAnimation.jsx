import anime from "animejs";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useRunAnimation = () => {
  const animeRef = useRef(null);

  const runAnimation = () => {
    anime({
      targets: animeRef.current,
      translateX: 560,
      scale: 0.85,
      easing: "easeInOutExpo",
      delay: 1000,

      duration: 2000,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === 900) {
        runAnimation();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    runAnimation();
  }, []);

  return animeRef;
};

export default useRunAnimation;
