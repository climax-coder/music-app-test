import { render, screen } from "@testing-library/react";
import ArtistDetail from "../ArtistDetail";
import { useMusicStore } from "../../store/musicStore";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../../store/musicStore");

const mockAlbums = [
  {
    id: 1,
    title: "Album 1",
    artist: "Artist A",
    songs: [
      { id: 1, title: "Song 1", artist: "Artist A", genre: "Pop" },
      { id: 2, title: "Song 2", artist: "Artist A", genre: "Pop" },
    ],
  },
];

describe("ArtistDetail", () => {
  it("displays songs from the selected album by artist", () => {
    (useMusicStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ albums: mockAlbums })
    );

    render(
      <MemoryRouter initialEntries={["/artist/1"]}>
        <Routes>
          <Route path="/artist/:id" element={<ArtistDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText('Songs from "Album 1" by Artist A')
    ).toBeInTheDocument();

    expect(screen.getByText("Song 1")).toBeInTheDocument();
    expect(screen.getByText("Song 2")).toBeInTheDocument();
    expect(screen.getAllByText("Pop")).toHaveLength(2);
  });
});
