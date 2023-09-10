import IconClose from "../assets/images/MenuClose";

const Sidebar = ({
  width,
  setMenuOpen,
  setxPosition,
  side,
  xPosition,
  children,
}) => {
  console.log(width);
  console.log(xPosition);
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = () => {
    setxPosition(-100);
    setMenuOpen(false);
  };
  return (
    <div
      ref={side}
      className="sidebar"
      style={{
        width: `${width}%`,
        height: "100%",
        transform: `translatex(${xPosition}%)`,
      }}
    >
      <button onClick={handleClose} className="menuCloseBtn">
        <IconClose />
      </button>
      <div className="content">{children}</div>
    </div>
  );
};

export default Sidebar;
