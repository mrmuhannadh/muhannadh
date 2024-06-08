import "./App.css";
import Mode from "./pages/components/Common/mode";
import Header from "./pages/components/TopPart/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/luckiest-guy";
import "@fontsource/oxygen";
import "@fontsource/krona-one";
import AboutMe from "./pages/components/AboutMe/aboutMe";
import AnimatedCursor from "react-animated-cursor";
import "@fontsource/dm-serif-text";
import React, { useEffect, useRef, useState } from "react";
import {
  Book,
  Bookshelf,
  BuildingFillUp,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Display,
  Person,
  Phone,
} from "react-bootstrap-icons";
import Experience from "./pages/components/Experience/Experience";
import Skills from "./pages/components/Skills/skills";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "./pages/components/Education/education";
import Projects from "./pages/components/Projects/projects";
import Contact from "./pages/components/Contact/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import GoUpButton from "./pages/components/Common/goUpButton";
import "react-toastify/dist/ReactToastify.css";
import DownloadMyCv from "./pages/components/Common/downloadMyCv";

function App() {
  const aboutMe = useRef(null);
  const education = useRef(null);
  const skills = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [openNavBar, setOpenNavBar] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  function toggleNavBar() {
    setOpenNavBar((prevState) => !prevState);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "4px solid var(--cursor-color)",
        }}
      />

      <div className={`sideNavBar ${openNavBar ? "sideOpened" : ""}`}>
        <div className={`sideNavigationBar ${openNavBar ? "openNavBar" : ""}`}>
          <ul className="sideNavList">
            <li
              onClick={() => {
                scrollToSection(aboutMe);
                toggleNavBar();
              }}
            >
              <Person />
              About Me
            </li>
            <li
              onClick={() => {
                scrollToSection(experience);
                toggleNavBar();
              }}
            >
              <BuildingFillUp /> Experience
            </li>
            <li
              onClick={() => {
                scrollToSection(skills);
                toggleNavBar();
              }}
            >
              <Bookshelf />
              Skills
            </li>
            <li
              onClick={() => {
                scrollToSection(education);
                toggleNavBar();
              }}
            >
              <Book />
              Education
            </li>
            <li
              onClick={() => {
                scrollToSection(projects);
                toggleNavBar();
              }}
            >
              <Display />
              Projects
            </li>
            <li
              onClick={() => {
                scrollToSection(contact);
                toggleNavBar();
              }}
            >
              <Phone />
              Contact
            </li>
          </ul>
          <div
            className={`arrowDiv ${openNavBar ? "sideOpened" : ""}`}
            onClick={toggleNavBar}
          >
            {openNavBar ? <ChevronDoubleLeft /> : <ChevronDoubleRight />}
          </div>
        </div>
      </div>

      <Header />
      <GoUpButton />
      <DownloadMyCv />

      <div className="modeIcon">
        <Mode />
      </div>
      <div ref={aboutMe}>
        <AboutMe />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
