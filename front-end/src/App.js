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
import React, { useRef, useState } from "react";
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

      <div className="sideNavBar">
        <div className={`sideNavigationBar ${openNavBar ? "openNavBar" : ""}`}>
          <ul className="sideNavList">
            <li onClick={() => scrollToSection(aboutMe)}>
              <Person />
              About Me
            </li>
            <li onClick={() => scrollToSection(education)}>
              <Book />
              Education
            </li>
            <li onClick={() => scrollToSection(skills)}>
              <Bookshelf />
              Skills
            </li>
            <li onClick={() => scrollToSection(experience)}>
              <BuildingFillUp /> Experience
            </li>
            <li onClick={() => scrollToSection(projects)}>
              <Display />
              Projects
            </li>
            <li onClick={() => scrollToSection(contact)}>
              <Phone />
              Contact
            </li>
          </ul>
          <div className="arrowDiv" onClick={toggleNavBar}>
            {openNavBar ? <ChevronDoubleLeft /> : <ChevronDoubleRight />}
          </div>
        </div>
      </div>

      <Header />

      <div className="modeIcon">
        <Mode />
      </div>
      <div ref={aboutMe}>
        <AboutMe />
      </div>
      <div className="row">{/* <Footer /> */}</div>
    </div>
  );
}

export default App;
