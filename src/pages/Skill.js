import React from "react";
import { Outlet } from "react-router-dom"; // Outlet 컴포넌트를 추가합니다.
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import IconHtml5 from "../assets/images/Html";
import IconGithub from "../assets/images/Git";
import IconReact from "../assets/images/React";
import IconJavascript from "../assets/images/Javascript";
import IconJquery from "../assets/images/Jquery";

const SkillData = [
  {
    id: 1,
    title: "HTML/CSS",
    image: <IconHtml5 />,
    desc1: "원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.",
    desc2: "빌드시스템(Gulp)과 템플릿 엔진(ejs, jade)의 사용이 가능합니다.",
    desc3:
      " Css 최신 문법이 숙지되어 있고 Css 프리프로세서 Sass를 사용할 수 있습니다.",
  },
  {
    id: 2,
    title: "jQuery",
    image: <IconJquery />,
    desc1: "다양한 속성과 메소드를 능숙하게 사용이 가능합니다.",
    desc2: "jQuery UI 라이브러리를 활용할 수 있습니다.",
    desc3: "css 조작, 이벤트, 효과 및 애니메이션 기능을 구현 할 수 있습니다.",
  },
  {
    id: 3,
    title: "Javascript",
    image: <IconJavascript />,
    desc1:
      "Vanilla JS의 웹 제작이 가능하고 필요 이유에 대해 충분히 이해하고 있습니다.",
    desc2: "폭 넓은 플러그인의 사용이 가능합니다.",
    desc3: "ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.",
  },
  {
    id: 4,
    title: "React",
    image: <IconReact />,
    desc1: "컴포넌트를 생명주기를 이해하고 재활용성을 고려합니다.",
    desc2: "리덕스를 사용하여 상태관리를 할 수 있습니다.",
    desc3: "스타일드 컴포넌트를 사용할 수 있습니다",
  },
  {
    id: 5,
    title: "Git/Github",
    image: <IconGithub />,
    desc1: "git flow가 무엇인지 알고 있으며 왜 사용하는지 이해하고 있습니다.",
    desc2: "깃허브를 사용하여 팀프로젝트 경험이 있습니다.",
    desc3: "깃허브를 통한 커밋 관리 경험이 있습니다.",
  },
];

const SkillDetail = ({ title, image, desc1, desc2, desc3 }) => {
  return (
    <div className="skill-list">
      <h3 level="3" className="skill-label">
        {image} {title}
      </h3>
      <ul className="skill-detail">
        <li>{desc1}</li>
        <li>{desc2}</li>
        <li>{desc3}</li>
      </ul>
    </div>
  );
};

const Skill = () => {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="youtubeCont">
          <div className="container">
            <WrapTitle text={["MY", "Skills"]} />
            <div className="skillCont">
              {SkillData.map((skill) => (
                <SkillDetail
                  key={skill.id}
                  title={skill.title}
                  image={skill.image}
                  desc1={skill.desc1}
                  desc2={skill.desc2}
                  desc3={skill.desc3}
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

export default Skill;
