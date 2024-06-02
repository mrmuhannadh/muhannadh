import "./style.css";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div className="headerSet">
      <div className="headerContent d-flex text-align-center justify-content-center">
        <div className="headerImage"></div>
        <div className="container textContainer">
          <span className="welcomeText">
            <TypeAnimation
              sequence={["WELCOME TO MY", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </span>
          <div className="subText">
            <span className="portfolioText">
              <TypeAnimation
                sequence={[1000, "PORTFOLIO", 1000]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </div>
          <div className="extraContent">
            <img alt="imageForAdd" />
          </div>
        </div>
      </div>
    </div>
  );
}
