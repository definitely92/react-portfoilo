import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Reference from "./pages/Reference";
import ReferDetail from "./pages/ReferDetail";
import Script from "./pages/Script";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Main />} />
        <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
        <Route
          path={process.env.PUBLIC_URL + "/reference"}
          element={<Reference />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/reference-detail"}
          element={<ReferDetail />}
        />
        <Route path={process.env.PUBLIC_URL + "/script"} element={<Script />} />
        <Route path={process.env.PUBLIC_URL + "/skill"} element={<Skill />} />
        <Route
          path={process.env.PUBLIC_URL + "/project"}
          element={<Project />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/contact"}
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
