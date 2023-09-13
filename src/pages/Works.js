import Layout from "../components/Layout";
import WrapTitle from "../components/WrapTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const scriptInfo = [
  {
    id: 1,
    image1: "react-portfolio/img/makeshop_admin_main.png",
    image2: "react-portfolio/img/makeshop_admin_img.png",
    title: "메이크샵 관리자",
    desc1:
      "쇼핑몰 제작,판매, 운영, 홍보 등을 제공하는 쇼핑몰 솔루션 서비스 메이크샵의 관리자 퍼블리싱 업무를 하였습니다.",
    desc2:
      "고객의 요청 사항을 반영한 새로운 기능을 추가하거나 전체적인 페이지 리뉴얼과 디자인 변경 등 운영에 필요한 유지 보수 들을 진행 하였습니다.",
    source:
      "https://premium263.makeshop.co.kr/makeshop/newmanager/index.html?suburl=associated_service",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
  {
    id: 2,
    image1: "react-portfolio/img/makeshop_shop_default.gif",
    image2: "react-portfolio/img/makeshop_admin_design_edit.png",
    title: "메이크샵 상점 템플릿",
    desc1:
      "메이크샵 상점들의 쇼핑몰디자인 템플릿을 관리하여 이슈 사항이나 추가 기능들을 보완하는 퍼블리싱 업무를 담당하였습니다.",
    desc2:
      "상점의 페이지들을 관리자 편집 툴을 사용하여 html,css,javacsript로 관리하였습니다",
    source: "http://guest4.www264.freesell.co.kr/index.html",
    techStack: "Html & css & javascript",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
  {
    id: 3,
    image1: "react-portfolio/img/port06.jpg",
    image2: "react-portfolio/img/mysoho_front.gif",
    title: "마이소호 홈페이지",
    desc1: "마이소호 홈페이지 구축 및 리뉴얼 퍼블리싱을 담당하였숩니다.",
    desc2:
      "홈페이지를 운영하면서 생기는 고객들의 요청사항 불편사항 등을 개선하고 추가 페이지 혹은 페이지 보완에 필요한 퍼블리싱을 작업하였습니다.",
    source: "https://www.mysoho.com/index.html",
    techStack: "Html & css & javascript",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
  {
    id: 4,
    image1: "react-portfolio/img/port04.jpg",
    image2: "react-portfolio/img/mysoho_admin_m.gif",
    title: "마이소호 판매자센터 (관리자)",
    desc1:
      "쇼핑몰 솔루션 마이소호의 관리자 사이트입니다. 상점을 운영하면서 필요한 기능과 설정 사항들을 계속 운영하면서 필요한 퍼블리싱 업무들을 작업하였습니다.",
    desc2:
      "사이트를 유지하면서 발생하는 이슈들과 개선 사항들을 빠르게 반영하며 기능 개선 및 추가 시 필요한 퍼블리싱을 주로 담당했습니다.",
    source: "https://admin.mysoho.com/adm/main",
    techStack: "Html & css & javascript",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
  {
    id: 5,
    image1: "react-portfolio/img/mysoho_shop.gif",
    image2: "react-portfolio/img/mysoho_template_shop.gif",
    title: "마이소호 상점 퍼블리싱",
    desc1:
      "고객들이 이용하고 있는 마이소호 쇼핑몰들의 퍼블리싱을 담당하였으며 고객들이 이용가능한 쇼핑몰 기본 템플릿들을 퍼블리싱하였습니다.",
    desc2:
      "상점 쪽은 vue 프레임워크로 개발되어 vue로 개발 환경과 구조를 이해하고 vue로 개발된 코드에서 html, css , javascript 관련 코드 등을 수정하여 퍼블리싱 유지 보수를 진행했습니다.",
    source:
      "https://mysoho.com/template/mobile/index_design_preview.html?_gl=1*s178pl*_ga*NzQ1NjU2NzA3LjE2OTQxOTczNzE.*_ga_35XXRSZZQS*MTY5NDUwNDU4Ni42LjEuMTY5NDUwNzIwMS4zLjAuMA..",
    techStack: "Html & css & javascript",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
  {
    id: 6,
    image1: "react-portfolio/img/mylink.gif",
    image2: "react-portfolio/img/mylink_calendar.png",
    title: "마이링크 신규 제작",
    desc1:
      "링크 하나로 판매자가 등록한 판매 일정과 상품과 관련된 링크(주문서 등)를 보여줄 수 있는 마이링크 관련된 신규 페이지 제작 퍼블리싱을 담당했습니다.",
    desc2:
      "반응형으로 진행하였으며 fullcalendar 라이브러리를 활용하여 일정을 관리하는 캘린더 기능을 추가하였습니다.",
    source: "https://sohonara.mysoho.com/",
    techStack: "Html & css & javascript",
    techStack1: "Html",
    techStack2: "css",
    techStack3: "Javascript",
  },
];

const SctipText = ({
  source,
  image1,
  image2,
  title,
  desc1,
  desc2,
  techStack1,
  techStack2,
  techStack3,
}) => {
  return (
    <div className="works__cont__wrap">
      <div className="works__cont__img">
        <a href={source} target="_blank">
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
        </a>
      </div>
      <div className="works__cont__txt">
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
      <p className="tech_tit">TECH_STACK</p>
      <ul className="tech">
        <li>{techStack1}</li>
        <li>{techStack2}</li>
        <li>{techStack3}</li>
      </ul>
      <button
        className="works_btn"
        onClick={() => {
          window.open(source);
        }}
      >
        view site
      </button>
    </div>
  );
};

const Works = () => {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="worksCont">
          <div className="container">
            <WrapTitle text={["Works", "Experience"]} />
            <div className="works__cont">
              {scriptInfo.map((text) => {
                return (
                  <SctipText
                    key={text.id}
                    source={text.source}
                    title={text.title}
                    desc1={text.desc1}
                    desc2={text.desc2}
                    image1={text.image1}
                    image2={text.image2}
                    techStack1={text.techStack1}
                    techStack2={text.techStack2}
                    techStack3={text.techStack3}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default Works;
