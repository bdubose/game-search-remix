import { Link } from "@remix-run/react";
import { GameListing } from "~/utils/GamesApi"

interface GameCardProps {
    game: GameListing;
}

const getYear = (epoch: number) =>
    epoch ? new Date(epoch * 1_000).getFullYear().toString() : '';

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="flex justify-center text-center flex-col rounded-xl w-80 m-8 bg-slate-400">
            <h1 data-testid="game-card-name-header">{game.name}</h1>
            <div>{getYear(game.first_release_date)}</div>
            <Link to={`/game/${game.slug}`}>More...</Link>
        </div>
    )
}