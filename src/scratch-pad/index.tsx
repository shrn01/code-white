import { css } from "@emotion/css";
import ReactSimpleCodeEditor from "react-simple-code-editor";

type Props = {
  text: string;
  onTextChange: Function;
};

const ScratchPad = ({ text, onTextChange }: Props) => {
  return (
    <div
      className={css({
        border: "1px solid rgba(0, 0, 0, .2);",
        flex: 1,
        padding: 5,
        display: "flex",
      })}
    >
      <ReactSimpleCodeEditor
        placeholder="Start Typing..."
        value={text}
        tabSize={4}
        padding={10}
        highlight={(code) => code}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 15,
          width: "100%",
          border: "none",
        }}
        onValueChange={(s) => onTextChange(s)}
      />
    </div>
  );
};

export default ScratchPad;
