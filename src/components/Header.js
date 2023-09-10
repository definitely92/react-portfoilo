import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Menu from "./Menu";

const Header = ({ info }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [xPosition, setxPosition] = useState(-100);
  const side = useRef();
  // button 클릭 시 토글
  const handleMenuOpen = () => {
    setxPosition(0);
    setMenuOpen(false);
  };
  // 외부 클릭시 닫기
  // useEffect(() => {
  //   window.addEventListener("click", handleClose);
  //   return () => {
  //     window.removeEventListener("click", handleClose);
  //   };
  // });

  return (
    <header id="header">
      <Sidebar
        setxPosition={setxPosition}
        setMenuOpen={setMenuOpen}
        xPosition={xPosition}
        side={side}
        width={"100"}
      >
        <Menu />
      </Sidebar>
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </div>
        <div className="header__inner__menu">
          <button onClick={() => handleMenuOpen()} className="menuBtn">
            <span className="sr-only">menu</span>
          </button>
        </div>
      </div>
      <div className="header__nav demo">
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
      </div>
      <div className="header__info" id={info}>
        <div>
          <h4>email</h4>
          <p>
            <a href="mailto:tngus5232@naver.com">tngus5232@naver.com</a>
          </p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>
            <a href="tel:010-3866-2057">010-3866-2057</a>
          </p>
        </div>
        <div>
          <h4>social</h4>
          <ul>
            <li>
              <a href="/">Instargram</a>
            </li>
            <li>
              <a href="https://github.com/definitely92">Github</a>
            </li>
            <li>
              <a href="https://hsh92.tistory.com/" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
