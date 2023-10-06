import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import {
  Alasan,
  CTA,
  Footer,
  Hero,
  Navbar,
  Rekan,
  Rekomendasi,
  Header,
  Search,
} from "../components/LandingPage";

const LandingPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("isLogin") != "Login") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`gray-bg ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <Hero />
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Search /> */}
          <Rekomendasi />
          <Alasan />
          <Rekan />
          <CTA />
        </div>
      </div>

      <div className={`gray-bg mt-20 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
