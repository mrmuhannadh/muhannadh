import React from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";

export default function ContactItem({ icon, value }) {
  const notify = () => toast("Text copied");
  const error = () => toast("Not coppied");
  const selectedTheme = localStorage.getItem("selectedTheme");

  console.log(selectedTheme);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        notify();
      })
      .catch((err) => {
        error();
      });
  };
  return (
    <>
      <div
        className="contactItem"
        onClick={copyToClipboard}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="5000"
        data-aos-duration="3000"
      >
        {icon} <span>{value}</span>
        <ToastContainer
          position="bottom-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={selectedTheme}
          limit={2}
        />
      </div>
    </>
  );
}
