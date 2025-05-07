import { render, screen } from "@testing-library/react";
import ArtistList from "../ArtistList";
import { useMusicStore } from "../../store/musicStore";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../store/musicStore");

const mockAlbums = [
  { id: 1, title: "Album 1", artist: "Artist A", songs: [] },
  { id: 2, title: "Album 2", artist: "Artist B", songs: [] },
];

describe("ArtistList", () => {
  it("renders a list of albums with artist and title", () => {
    (useMusicStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ albums: mockAlbums })
    );

    render(
      <BrowserRouter>
        <ArtistList />
      </BrowserRouter>
    );

    expect(screen.getByText("Artist A – Album 1")).toBeInTheDocument();
    expect(screen.getByText("Artist B – Album 2")).toBeInTheDocument();
  });
});
