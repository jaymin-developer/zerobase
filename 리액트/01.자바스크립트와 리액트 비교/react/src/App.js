import { useState } from "react";
import "./styles.css";

export default function App() {
  const [key, setKey] = useState("메일");
  const dataMap = {
    메일: "메일함을 확인하세요.",
    카페: "즐겨찾는 카페의 새 소식을 확인해보세요.",
    블로그: "오늘을 기록해보세요.",
  };

  function clickTabItem(e) {
    setKey(e.target.id);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="tab-items">
          <div className="tab-item" id="메일" onClick={clickTabItem}>
            메일
          </div>
          <div className="tab-item" id="카페" onClick={clickTabItem}>
            카페
          </div>
          <div className="tab-item" id="블로그" onClick={clickTabItem}>
            블로그
          </div>
        </div>
        <div className="tab-content-wrapper">{dataMap[key]}</div>
      </div>
    </div>
  );
}
