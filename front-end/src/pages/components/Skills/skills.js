import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.css";
import CommonSlider from "./commonSlider";

//Frameworks
import angular from "../../../assets/Logo/FrameWorks/ang.png";
import react from "../../../assets/Logo/FrameWorks/react.png";
import codelgniter from "../../../assets/Logo/FrameWorks/cod.png";
import flutter from "../../../assets/Logo/FrameWorks/flutter.png";
import netCore from "../../../assets/Logo/FrameWorks/netCore.png";
import next from "../../../assets/Logo/FrameWorks/next.png";
import spring from "../../../assets/Logo/FrameWorks/sb.png";
import symphony from "../../../assets/Logo/FrameWorks/sym.png";

//Tools
import azure from "../../../assets/Logo/FrameWorks/azure.png";
import bootstrap from "../../../assets/Logo/FrameWorks/boot.png";
import tailwind from "../../../assets/Logo/Languages/tailwind.png";
import github from "../../../assets/Logo/Tools/github.png";
import gitlab from "../../../assets/Logo/Tools/gitlab.png";
import bitbucket from "../../../assets/Logo/Tools/bitbucket.webp";
import sourceTree from "../../../assets/Logo/Tools/stree.webp";
import vscode from "../../../assets/Logo/Tools/vscode.webp";
import vs from "../../../assets/Logo/Tools/vs.png";
import postman from "../../../assets/Logo/Tools/postman.webp";
import appium from "../../../assets/Logo/Tools/appium.png";
import sqlserver from "../../../assets/Logo/Tools/sqlserver.jpg";

//Langs
import c from "../../../assets/Logo/Languages/c.png";
import css from "../../../assets/Logo/Languages/css.png";
import dart from "../../../assets/Logo/Languages/dart.png";
import html from "../../../assets/Logo/Languages/html.png";
import java from "../../../assets/Logo/Languages/java.png";
import js from "../../../assets/Logo/Languages/js.png";
import mysql from "../../../assets/Logo/Languages/mysql.png";
import php from "../../../assets/Logo/Languages/php.png";
import python from "../../../assets/Logo/Languages/python.png";
import cSharp from "../../../assets/Logo/Languages/cS.png";
import NonTechnicalSkills from "./nonTechnical";

export default function Skills() {
  const langauges = [js, dart, php, java, html, css, mysql, python, cSharp, c];
  const frameworks = [
    react,
    flutter,
    next,
    netCore,
    spring,
    symphony,
    angular,
    codelgniter,
  ];
  const tools = [
    azure,
    bootstrap,
    tailwind,
    github,
    gitlab,
    bitbucket,
    sourceTree,
    vscode,
    vs,
    postman,
    appium,
    sqlserver,
  ];
  return (
    <div className="container subContainer">
      <div data-aos="fade-right">
        <span className="subTopic">Skills</span>
      </div>
      <Tabs
        defaultActiveKey="frameworks"
        id="fill-tab-example"
        className="mb-3 tabsStyle"
        fill
        data-aos="zoom-in"
      >
        <Tab eventKey="frameworks" title="Frameworks">
          <CommonSlider items={frameworks} />
        </Tab>
        <Tab eventKey="langs" title="Programming Languages">
          <CommonSlider items={langauges} />
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <CommonSlider items={tools} />
        </Tab>
        <Tab eventKey="nonTech" title="Non-Technical">
          <NonTechnicalSkills />
        </Tab>
      </Tabs>
    </div>
  );
}
