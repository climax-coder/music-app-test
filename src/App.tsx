import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import { useMusicStore } from "./store/musicStore";
import { albums } from "./data/albums";

const App: React.FC = () => {
  const setAlbums = useMusicStore((s) => s.setAlbums);

  useEffect(() => {
    setAlbums(albums);
  }, [setAlbums]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </Router>
  );
};

export default App;
