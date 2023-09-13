import Header from "../components/Header";
import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import Footer from "../components/Footer";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { projectLists } from "../libs/poject-lists";

const projectInfo = projectLists;

const Port = ({ link, image, title, category, text, time }) => {
  return (
    <div className="port__item">
      <figure className="port__item__img">
        <Link to={link}>
          <img src={image} alt={title} />
        </Link>
      </figure>
      <div className="port__item__txt">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{time}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div id="wrap">
      <Header info="none" />
      <Layout>
        <section id="portCont">
          <div className="container">
            <WrapTitle text={["Project"]} info="light" />
            <div className="port__cont">
              {projectInfo.map((info) => (
                <Port
                  key={info.id}
                  link={info.link}
                  image={info.image}
                  title={info.title}
                  category={info.category}
                  text={info.text}
                  time={info.time}
                />
              ))}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

Port.propTypes = {
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Project;
