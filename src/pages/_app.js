import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/style.css";
import { useEffect } from "react";

// //Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
