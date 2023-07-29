import HeroPage from "./Components/HeroPage";
import MySkills from "./Components/MySkillsPage";
import MyWork from "./Components/MyWorkPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Components/WorkPages/main-page";
import NoteItDownPage from "./Components/WorkPages/note-it-down-page";
import HackxPage from "./Components/WorkPages/hackx-node-page";
import MakeNotePage from "./Components/WorkPages/make-note-page";
import EcomPage from "./Components/WorkPages/ecom-page";
import ResumeBuilderPage from "./Components/WorkPages/resume-builder-page";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}>

          </Route>


          <Route
            exact path="/project-resume-builder" element={<ResumeBuilderPage />}
          >

          </Route>

          <Route
            exact path="/project-note-it-down" element={<NoteItDownPage />}
          >

          </Route>

          <Route
            exact path="/project-hack-x-node" element={<HackxPage />}
          >

          </Route>

          <Route
            exact path="/project-make-note" element={<MakeNotePage />}
          >

          </Route>

          <Route
            exact path="/project-ecom" element={<EcomPage />}
          >

          </Route>

        </Routes>
      </Router>



    </div>
  );
}

export default App;
