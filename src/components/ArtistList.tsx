import React from "react";
import { useMusicStore } from "../store/musicStore";
import { Link } from "react-router-dom";

const ArtistList: React.FC = () => {
  const albums = useMusicStore((state) => state.albums);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Albums</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {albums.map((album) => (
          <li key={album.id}>
            <Link
              to={`/artist/${album.id}`}
              className="block px-4 py-2 bg-indigo-100 text-indigo-800 font-medium rounded hover:bg-indigo-200 transition"
            >
              {album.artist} – {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
