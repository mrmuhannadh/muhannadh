import {
  Book,
  Bookshelf,
  BuildingFillUp,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Display,
  Person,
} from "react-bootstrap-icons";
import "./style.css";
import { useState } from "react";

export default function SideNavBar() {
  const [openNavBar, setOpenNavBar] = useState(false);

  function toggleNavBar() {
    setOpenNavBar((prevState) => !prevState);
  }

  console.log(
    "%csrcpagescomponentsCommonsideNavBar.js:21 openNavBar",
    "color: #007acc;",
    openNavBar
  );

  return (
    <>
      <div className={`sideNavigationBar ${openNavBar ? "openNavBar" : ""}`}>
        <ul className="sideNavList">
          <li>
            <Person />
            About Me
          </li>
          <li>
            <Book />
            Education
          </li>
          <li>
            <Bookshelf />
            Skills
          </li>
          <li>
            <BuildingFillUp /> Experience
          </li>
          <li>
            <Display />
            Projects
          </li>
        </ul>
        <div className="arrowDiv" onClick={toggleNavBar}>
          {openNavBar ? <ChevronDoubleLeft /> : <ChevronDoubleRight />}
        </div>
      </div>
    </>
  );
}
