import { create } from "zustand";

interface Song {
  id: number;
  title: string;
  artist: string;
  genre: string;
}

interface Album {
  id: number;
  title: string;
  artist: string;
  songs: Song[];
}

interface MusicStore {
  albums: Album[];
  setAlbums: (albums: Album[]) => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  setAlbums: (albums) => set({ albums }),
}));
