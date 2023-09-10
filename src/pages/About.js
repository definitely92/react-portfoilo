import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import WrapTitle from "../components/WrapTitle";
import IconBxBuilding from "../assets/images/Company";

const aboutMe = [
  {
    id: "1",
    title: "UI/UX Publisher & Front end Developer",
    desc: "상상한 아이디어를 제가 배운 기술로 구현해가는 과정에서 이 일에 대한 보람을 느끼고 저를 더 성장시키게 합니다. 항상 새로운 시도를 두려워하지 않는 프론트앤드 개발자가 되겠습니다. 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 통해 고객의 니즈를 만족시키기 위해 노력하겠습니다.",
    image: "img/aboutImg1.jpeg",
  },
];

const experience = [
  {
    id: "1",
    time: "2017.11 ~ 2023.04",
    name: "커넥트웨이브(전 코리아센터)",
    desc: "쇼핑몰 전자상거래 플랫폼 솔루션 메이크샵의 퍼블리싱 운영을 담당하여 유지보수 및 기능 개발, 리뉴얼 등을 작업하였고 html,css,jquery, javascript등을 사용하여 운영하였습니다.",
  },
  {
    id: "2",
    time: "2016.8 ~ 2017.03",
    name: "뉴리버",
    desc: "웹에이전시 뉴리버에서 퍼블리싱을 담당하였습니다. 웹사이트 제작 및 유지보수를 하여 퍼블리싱 경험을 쌓았습니다.",
  },
  {
    id: "3",
    time: "2015.11 ~ 2016.03",
    name: "[NCS기반]디지털 웹 디자인(웹퍼블리셔)",
    desc: "그린컴퓨터아트학원에서 포토샵,일러스트, HTML 기초, javascript기초와 반응형, 웹표준 등을 배웠습니다.",
  },
  {
    id: "4",
    time: "2023.06 ~ 2023.08",
    name: "10주 완성 프로젝트 캠프 프론트엔드 (리액트)",
    desc: "6주간은 사전직무교육으로 서비스기획과 웹표준 html, css, javascript, react 개념들을 배우고 4주간은 실제 기업들과 협업하여 진행하는 프로젝트 코스를 진행했습니다. 팀프로젝트 형식으로 제가 속한 팀은 웅진씽크빅 기업과 협업하여 현재 웅진씽크빅 사이트에서 겪고 있는 불편함들 중에서 가장 문제점인 페이지 추가 및 수정 방식을 개선하는 프로젝트를 진행하였습니다. 현재 웅진씽크빅은 주로 통이미지 형식의 페이지들이 많았으며 페이지를 관리하고 추가 및 삭제, 메뉴를 추가하고 삭제하는 방식들이 개발자가 아닌 일반 기업 관리자가 관리하기 어려운 형식이었습니다, 그래서 리액트를 사용하여 메뉴관리와 페이지 관리를 할 수 있는 간단한 관리자 페이지를 만드는 목표를 가지고 진행하였으며, 제가 맡은 부분은 로컬스토리지를 이용한 로그인 페이지와 로그아웃, 특정 페이지 접근시 로그인 페이지로 이동 제한, 편집 페이지 작업을 맡았습니다.",
  },
];

const AboutText = ({ title, desc, image }) => {
  return (
    <div className="about">
      <div className="about-img">
        <img src={image} alt={title} />
      </div>
      <div className="about-txt">
        <h2>{title}</h2>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

const Experience = ({ time, name, desc }) => {
  return (
    <div className="experienceList">
      <div className="experience">
        <ul>
          <li>
            <div className="icon">
              <IconBxBuilding color="white" />
            </div>
            <span className="time">{time}</span>
            <h4 level="4">
              {name}
              <span className="place">PUBLISHER</span>
            </h4>
            <p>{desc}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="aboutCount">
          <div className="container">
            <WrapTitle text={["about", "me"]} />
            <div className="about-cont">
              {aboutMe.map((txt) => (
                <AboutText
                  key={txt.id}
                  title={txt.title}
                  desc={txt.desc}
                  image={txt.image}
                />
              ))}
            </div>
            <h2 className="aboutTitle">EXPERIENCE & EDUCATION</h2>
            <div className="about-cont">
              {experience.map((ex) => (
                <Experience
                  key={ex.id}
                  time={ex.time}
                  name={ex.name}
                  desc={ex.desc}
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

export default About;
