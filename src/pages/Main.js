import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { gsap } from "gsap";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  // const getSite = useCallback(() => {
  //   setTimeout(() => {
  //     console.log("두번째 시작");
  //     setIsLoading(false);
  //     mainStart();
  //   }, 1000);
  // }, []);

  const mainStart = () => {
    gsap.to(".main__cont__title > div:nth-child(1)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".main__cont__title > div:nth-child(2)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.6,
    });
    gsap.to(".main__cont__title > div:nth-child(3)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.9,
    });
    gsap.to(".main__cont__title > div:nth-child(4)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 1.2,
    });
    gsap.to(".header__inner", {
      duration: 0.4,
      top: 0,
      opacity: 1,
      delay: 1.5,
    });
    gsap.to(".header__info", {
      duration: 0.4,
      bottom: 0,
      opacity: 1,
      delay: 1.5,
    });
  };

  const getSite = () => {
    console.log("두번째 시작");
    setIsLoading(false);
    mainStart();
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("첫번째 시작");
      getSite();
    }, 1000);
  }, [getSite]);

  return (
    <div id="wrap" className="lock">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main id="main">
            <section id="mainCont">
              <div className="main__cont">
                <div className="main__cont__title">
                  <div>Hello I'm</div>
                  <div>Web</div>
                  <div>Publisher</div>
                  <div>Su-Hyeon Hwang</div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default Main;
