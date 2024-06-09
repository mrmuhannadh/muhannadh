import React, { useState } from "react";
import { Display, Github, XCircleFill } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import portVideo from "../../../assets/images/Projects/portVideo.mp4";

export default function WebProjectMonitor({
  image,
  descriptions,
  technologies,
  gitLink,
  isMobile,
  viewDemo,
  demoVideo,
  siteLink,
}) {
  isMobile = isMobile ?? false;
  viewDemo = viewDemo ?? false;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigateToLink = (url) => {
    console.log("not,");
    window.open(url, "_blank");
  };

  return (
    <div className="row myPro d-flex justify-content-center align-items-center">
      <div className="col-md-4 monitorDiv d-flex" data-aos="zoom-out-right">
        {isMobile ? (
          <div className="smartphone">
            <img src={image} className="mobileImage" alt="mobileImage" />
          </div>
        ) : (
          <div className="iMac">
            <div className="body">
              <div className="screen">
                <div>
                  <img src={image} alt={image} className="imgPro" />
                </div>
              </div>
              <div className="logo"></div>
            </div>
            <div className="stand"></div>
          </div>
        )}
      </div>

      <div
        className="col-md-7 text-div"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        <span className="topic">{descriptions}</span>
        <div>
          Used Technologies: {technologies}
          <br />
          <div className="projectLinksRow">
            <a
              href={gitLink}
              rel="noreferrer"
              target="_blank"
              className="linkPro"
            >
              <Github className="m-1" />
              View Code
            </a>

            {viewDemo ? (
              <>
                <div className="video-container">
                  <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="custom-modal"
                    centered
                  >
                    <Modal.Body className="modelBody">
                      {" "}
                      <XCircleFill
                        color="red"
                        size={30}
                        className="closeButton"
                        onClick={handleClose}
                        type="button"
                      />
                      <video className="videoClass" controls autoPlay>
                        <source src={portVideo} type="video/mp4" />
                      </video>
                    </Modal.Body>
                  </Modal>
                </div>
                <div
                  className="links"
                  onClick={() =>
                    demoVideo ? handleShow() : navigateToLink(siteLink)
                  }
                  type="button"
                >
                  <Display className="m-1" /> View Demo
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
