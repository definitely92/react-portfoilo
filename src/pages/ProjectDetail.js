import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconBxBuilding from "../assets/images/Company";
import IconProject from "../assets/images/Project";
import IconCalendar3 from "../assets/images/Calendar";

const ProjectDetail = ({ data }) => {
  let { id } = useParams();
  let projectDetailData = data;
  const navigate = useNavigate();

  const findProject = projectDetailData.find(function (x) {
    return x.id == id;
  });

  return (
    <div id="wrap" className="light">
      <Header />
      <Layout>
        <section id="datailCont">
          <div className="container">
            <WrapTitle text={[""]} />
            <div className="detail-cont">
              <div className="heading-wrap">
                <button
                  onClick={() => {
                    navigate("/project");
                  }}
                >
                  🔙
                </button>
                <h1>{findProject.title}</h1>
              </div>
              <div className="detail">
                <article>
                  <div className="tit-wrap">
                    <ul className="meta-data">
                      <li>
                        <IconCalendar3 />
                        {findProject.time}
                      </li>
                      <li>
                        <IconBxBuilding />
                        {findProject.type}
                      </li>
                    </ul>
                    <ul className="tech">
                      <li>{findProject.techStack1}</li>
                      <li>{findProject.techStack2}</li>
                      <li>{findProject.techStack3}</li>
                    </ul>
                  </div>
                  <div className="body-wrap">
                    <div>
                      <p>{findProject.desc1}</p>
                      <p>{findProject.desc2}</p>
                      <div className="link">
                        <a
                          href={findProject.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconProject />
                          Project Link
                        </a>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <img src={findProject.image1} alt={findProject.title} />
                      </li>
                      <li>
                        <img src={findProject.image2} alt={findProject.title} />
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
