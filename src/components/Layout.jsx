import Routes from "../Router";
import styles from "../style";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-b from-blue-50 via-transparent to-transparent">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} border-b-[0.1px] border-gray-200`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="flex-grow">
        <Routes />
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} mt-6  border-t-[0.1px] border-gray-200`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
