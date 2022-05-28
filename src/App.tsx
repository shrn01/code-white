import "./App.css";
import AppHeader from "./app-header";
import ScratchPad from "./scratch-pad";
import RenderedBox from "./rendered-box";
import { css } from "@emotion/css";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState<string>("");
  return (
    <div
      className={css({
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <AppHeader text={text} />
      <div
        className={css({
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
        })}
      >
        <ScratchPad text={text} onTextChange={setText} />
        <RenderedBox text={text} />
      </div>
    </div>
  );
};

export default App;
