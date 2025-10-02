import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import TrainingVideos from "./components/TrainingVideos.jsx";
import Report1 from "./components/report1.jsx";
import Report2 from "./components/Report2.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Avatars />} />
        <Route path="/training" element={<TrainingVideos />} />
        <Route path="/report" element={<Report1 />} />
        <Route path="/report2" element={<Report2 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
