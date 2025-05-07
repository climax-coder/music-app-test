import React from "react";
import ArtistList from "../components/ArtistList";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">
          🎵 Music App
        </h1>
        <ArtistList />
      </div>
    </div>
  );
};

export default Home;
