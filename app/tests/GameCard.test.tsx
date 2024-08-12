import { GameListing } from "~/utils/GamesApi";
import { render, screen } from "@testing-library/react"
import { GameCard } from "../components/game/card/GameCard";
import '@testing-library/jest-dom';

const mockGame: GameListing = {
    name: "my game",
    slug: "my-game",
    first_release_date: 123,
};

describe("GameCard", () => {
    it("renders a heading", () => {
        render(<GameCard game={mockGame} />);

        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
        const gameName = screen.getByText("my game");
        expect(gameName).toBeVisible();
    })
});