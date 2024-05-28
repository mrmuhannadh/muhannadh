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

function App() {
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
      <Header />

      <div className="modeIcon">
        <Mode />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
