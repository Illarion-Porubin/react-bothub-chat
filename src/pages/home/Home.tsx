import Billboard from "../../components/billboard/Billboard";
import Footer from "../../components/footer/Footer";
import Generation from "../../components/generation/Generation";
import Header from "../../components/header/Header";
import Opportunities from "../../components/opportunities/Opportunities";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.main}>
        <Billboard />
        {/* <Opportunities /> */}
        {/* <Generation /> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
