import React from "react"; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/feed.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/CreatePost" element={<CreatePost />} />  
        <Route path="/about" element={<h1>About us</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
