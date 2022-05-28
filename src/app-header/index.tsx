import { css } from "@emotion/css";
import Button from "@mui/material/Button";

type Props = {
  text: string;
};

const AppHeader = ({ text }: Props) => {
  const TEXT_LABEL = "Text";
  const PDF_LABEL = "Pdf";
  const APP_TITLE = "Write it up";

  const getDownloadFileName = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const dateTime = date + " " + time;

    return "WriteitUp " + dateTime + ".txt";
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);

    element.download = getDownloadFileName();
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const printDiv = () => {
    window.print();
  };

  return (
    <header
      className={css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      })}
    >
      <span
        className={css({
          paddingLeft: 10,
          paddingTop: 3,
        })}
      >
        {APP_TITLE}
      </span>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
        })}
      >
        <Button
          variant="text"
          color="primary"
          size="small"
          disableElevation
          onClick={() => downloadTxtFile()}
        >
          {TEXT_LABEL}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="info"
          disableElevation
          onClick={() => printDiv()}
        >
          {PDF_LABEL}
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
