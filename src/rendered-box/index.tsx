import { css } from "@emotion/css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

type Props = {
  text: string;
};
const RenderedBox = ({ text }: Props) => {
  return (
    <div
      className={css({
        border: "1px solid rgba(0, 0, 0, .2);",
        flex: 1,
        padding: 10,
      })}
    >
      <div className={"markdown-body"} id="print">
        <ReactMarkdown remarkPlugins={[[remarkGfm]]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RenderedBox;
