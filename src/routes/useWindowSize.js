// @ts-check

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    let listener = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return {
    ...state
  };
}
