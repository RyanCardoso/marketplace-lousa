import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useDeviceType;
