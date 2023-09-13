import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";

const ContactText = styled.div`
  position: relative;
  color: #fff;
  font-size: 1.3rem;
  transition: all 0.2s;
  font-family: "Malgun Gothic";
  text-align: center;
  letter-spacing: normal;
`;

const InfoList = styled.div`
  padding-top: 4rem;
`;

const Item = styled.dl`
  margin-bottom: 2.5rem;
`;

const Title = styled.dt`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #fff;
  }
`;

const Text = styled.dd`
  cursor: pointer;
`;

const contactInfo = [
  {
    id: 1,
    title: "Email",
    text: "tngus5232@naver.com",
  },
  {
    id: 2,
    title: "Phone",
    text: "010-3866-2057",
  },
  {
    id: 3,
    title: "Github",
    text: "https://github.com/definitely92",
    url: "https://github.com/definitely92",
  },
  {
    id: 4,
    title: "Blog",
    text: "https://hsh92.tistory.com/",
    url: "https://hsh92.tistory.com/",
  },
];

const ListItem = ({ title, text, url }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Text
        onClick={() => {
          window.open(url);
        }}
      >
        {text}
      </Text>
    </Item>
  );
};

const Contact = () => {
  return (
    <div id="wrap">
      <Header info="none" />
      <Layout>
        <section id="contactCont">
          <div className="contact__cont">
            <div>CONTACT</div>
            <ContactText>
              <InfoList>
                {contactInfo.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    url={item.url}
                  />
                ))}
              </InfoList>
            </ContactText>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
