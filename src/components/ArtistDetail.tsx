import React from "react";
import { useParams } from "react-router-dom";
import { useMusicStore } from "../store/musicStore";

const ArtistDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const albums = useMusicStore((state) => state.albums);

  const album = albums.find((album) => album.id === Number(id));
  const songs = album?.songs || [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Songs from "{album?.title}" by {album?.artist ?? "Unknown Artist"}
        </h2>

        {songs.length > 0 ? (
          <ul className="space-y-3">
            {songs.map((song) => (
              <li
                key={song.id}
                className="p-4 bg-indigo-50 rounded border border-indigo-200"
              >
                <div className="text-lg font-medium text-indigo-800">
                  {song.title}
                </div>
                <div className="text-sm text-gray-600">{song.genre}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No songs found.</p>
        )}
      </div>
    </div>
  );
};

export default ArtistDetail;
