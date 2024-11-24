import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = (props: any) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"}); // Scrolls to top smoothly
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
