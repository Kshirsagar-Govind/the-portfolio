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


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}>

          </Route>

          <Route
            exact path="/project-note-it-down" element={<NoteItDownPage />}
          >

          </Route>

          <Route
            exact path="/project-hack-x-node" element={<HackxPage />}
          >

          </Route>

        </Routes>
      </Router>



    </div>
  );
}

export default App;
