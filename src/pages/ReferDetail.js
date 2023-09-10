import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReferDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) {
    navigate("/reference");
    return null;
  }

  const { title, desc, category, property, element, tag, version } =
    location.state;

  return (
    <div id="wrap" className="light">
      <Header />
      <Layout>
        <section id="referCont">
          <div className="container">
            <WrapTitle text={["Reference", "Detail"]} />
            <div className="refer-cont">
              <div>{title}</div>
              <div>{desc}</div>
              <div>{category}</div>
              <div>{property}</div>
              <div>{element}</div>
              <div>{tag}</div>
              <div>{version}</div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default ReferDetail;
