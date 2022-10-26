import "./App.css";
import AppHeader from "./app-header";
import ScratchPad from "./scratch-pad";
import RenderedBox from "./rendered-box";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";

type SavedNodeModel = {
  time?: string;
  value?: string;
};

const App = () => {
  const [text, setText] = useState<string>("");

  // Retrieve the data when the page is first loaded
  useEffect(() => {
    const nodeJson = localStorage.getItem("latest");
    const savedNode: SavedNodeModel = nodeJson
      ? JSON.parse(nodeJson)
      : undefined;

    savedNode && savedNode.value && setText(savedNode.value);
  }, []);

  useEffect(() => {
    const nodeToSave: SavedNodeModel = { value: text };
    localStorage.setItem("latest", JSON.stringify(nodeToSave));
  }, [text]);

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
