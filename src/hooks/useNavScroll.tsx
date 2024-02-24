import { useEffect } from "react";

export const useNavScroll = (
  lastScrollY: number,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setLastScrollY: React.Dispatch<React.SetStateAction<number>>
) => {
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.pageYOffset;
      if (
        window.scrollY > lastScrollY
        && (currentScrollY > 0)
      ) { // if scroll up hide the object
        setShow(false);
      } else {
        // if scroll down show the object
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });
};
