import Header from "../components/Header";
import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import Footer from "../components/Footer";
import propTypes from "prop-types";

const Port = ({ link, image, title, category, text, time }) => {
  return (
    <div className="port__item">
      <figure className="port__item__img">
        <a href={link} target="_blank">
          <img src={image} alt={title} />
        </a>
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

const projectInfo = [
  {
    id: "1",
    link: "http://www.choi-lee.com/",
    image: "../img/port01.jpg",
    title: "최앤이치과 리뉴얼",
    category: "PC & MOBILE",
    text: "메인페이지 및 서브페이지 작업",
    time: "2017.4 ~ 2017.6",
  },
  {
    id: "2",
    link: "https://www.philippineair.co.kr/",
    image: "../img/port02.jpg",
    title: "필리핀 항공 리뉴얼",
    category: "PC & MOBILE",
    text: "메인 페이지 및 서브 페이지 작업",
    time: "2016.9 ~ 2017.3",
  },
  {
    id: "3",
    link: "https://byulstar.com/",
    image: "../img/port03.jpg",
    title: "별 성형외과",
    category: "PC",
    time: "2016.9 ~ 2016.10",
    text: "PC 리뉴얼",
  },
  {
    id: "4",
    link: "https://www.mysoho.com/index.html",
    image: "../img/port06.jpg",
    title: "마이소호 홈페이지",
    category: "PC & MOBILE",
    text: "쇼핑몰 솔루션 마이소로 홈페이지 제작 및 유지 보수를 하였습니다",
    time: "",
  },
  {
    id: "5",
    link: "https://sohonara.mysoho.com/",
    image: "../img/port07.jpg",
    title: "마이소호 쇼핑몰 디자인 템플릿",
    category: "MOBILE",
    text: "마이소호 쇼핑몰 솔루션의 기본 쇼핑몰 템플릿 예시 입니다.",
  },
  {
    id: "6",
    link: "https://admin.mysoho.com/adm/main/dashboard",
    image: "../img/port04.jpg",
    title: "마이소호 관리자",
    category: "PC & MOBILE",
    text: "마이소호 솔루션의 관리자 사이트 입니다. 전체 페이지 제작 및 리뉴얼 유지 보수 등을 하였습니다.",
    time: "",
  },
  // {
  //   id: "7",
  //   link: "/",
  //   image: "",
  //   title: "메이크샵 관리자 페이지 운영",
  //   category: "PC",
  //   text: "메이크샵 관리자 페이지들을 관리하면서 유지 보수 및 기능 추가 퍼블리싱을 하였습니다.",
  //   time: "",
  // },
  {
    id: "8",
    link: "https://github.com/udemy-project-camp-team2/homepage-system-team-2",
    image: "../img/port08.jpg",
    title: "웅진씽크빅 홈페이지 관리",
    category: "PC",
    text: "리액트 리덕스를 사용하여 웅진씽크빅 홈페이지 페이지를 관리 할 수 있는 시스템을 개발했던 팀 프로젝트입니다. ",
    time: "2023.07 ~ 2023.08",
  },
  {
    id: "9",
    link: "https://github.com/udemy-project-camp-team2/react-team-project-22",
    image: "../img/movieapp1.gif",
    title: "무비리스트",
    category: "PC",
    text: "영화 API를 활용하여 리액트로 만든 영화 리스트 입니다. ",
    time: "2023.06 ~ 2023.07",
  },
  {
    id: "10",
    link: "https://github.com/definitely92/todolist",
    image: "../img/todoList.gif",
    title: "todoList",
    category: "PC",
    text: "리액트로 만든 간단한 할일 목록 추가 및 삭제 가능한 투두리스트입니다.  ",
    time: "2023.05 ~ 2023.05",
  },
  {
    id: "11",
    link: "https://github.com/definitely92/blog",
    image: "../img/blog.gif",
    title: "블로그",
    category: "PC",
    text: "리액트로 만든 간단한 할일 글 추가 및 삭제 가능한 블로그형식 투두리스트입니다. 모달창을 활용하여 수정이 가능하며 검색 및 리스트 정렬이 가능합니다.  ",
    time: "2023.05 ~ 2023.05",
  },
];

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
