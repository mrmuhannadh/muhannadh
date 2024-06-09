import React from "react";
import "./style.css";
import { toast } from "react-toastify";
import Toaster from "./toaster";

export default function ContactItem({ icon, value }) {
  const notify = () => toast("Text copied");
  const error = () => toast("Not coppied");

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
        <Toaster />
      </div>
    </>
  );
}
