import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  ArrowCounterclockwise,
  GearFill,
  XCircleFill,
} from "react-bootstrap-icons";
import Toast from "react-bootstrap/Toast";

export default function ColorPicker({ onBgColorChange, onFontColorChange }) {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);

  const handleShow = () => setShow(!show);

  const handleColorChange = (event) => {
    const color = event.target.value;
    onBgColorChange(color);
    setBgColor(color);
  };

  const handleFontColorChange = (event) => {
    const color = event.target.value;

    onFontColorChange(color);
    setFontColor(color);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function resetTheme() {
    window.location.reload(false);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="d-flex">
      <Toast ref={wrapperRef} show={show} onClose={() => setShow(false)}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Select Color</strong>
          <button onClick={resetTheme} className="btn resetBtn" disabled={bgColor === null && fontColor === null}>
            <ArrowCounterclockwise />
          </button>
        </Toast.Header>
        <Toast.Body className="toastBody">
          <div className="picker">
            <div className="colorPickerDiv">
              Select Background Color
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={bgColor}
                onChange={handleColorChange}
                className="colorPickerInput"
              />
            </div>
            <div className="colorPickerDiv">
              Select Font Color
              <input
                type="color"
                id="favcolor"
                value={fontColor}
                name="favcolor"
                onChange={handleFontColorChange}
                className="colorPickerInput"
              />
            </div>
          </div>
        </Toast.Body>
      </Toast>

      {show ? (
        <XCircleFill size={35} className="gear" onClick={handleShow} />
      ) : (
        <GearFill size={35} className="gear" onClick={handleShow} />
      )}
    </div>
  );
}
