import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { ForumProvider } from "./Context/FormContext";
import { Route, Routes } from "react-router-dom";
import { IndividualPost } from "./IndividualPost";

function App() {
  return (
    <div className="App">
      <ForumProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bookmark/:postId" element={<IndividualPost />} />
        </Routes>
      </ForumProvider>
    </div>
  );
}

export default App;
