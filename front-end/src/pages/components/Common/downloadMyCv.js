import React from "react";
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";

export default function DownloadMyCv() {
  const downloadCvFunc = () => {
    const cvLink =
      "https://drive.google.com/file/d/1Nfb8H-9pFbocRCCC9twJw4SKaJ1AAOme/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "muhannadh.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="downloadMyCv">
      <FileEarmarkArrowDownFill
        className="downloadIcon"
        onClick={downloadCvFunc}
        size={40}
      />
      <span className="tipText">Download CV</span>
    </div>
  );
}
