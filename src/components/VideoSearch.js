import { useRef } from "react";

const VideoSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="title">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default VideoSearch;
