import { GameListing } from "~/utils/GamesApi";
import { GameCard } from "../card/GameCard";

interface GamesListProps {
    games: GameListing[];
}

export const GameList = ({ games }: GamesListProps) => {
    if (!games?.length) return <div>No games found</div>

    return (
        <div className="flex flex-wrap gap-10">
            { games.map(game => (
                <GameCard key={game.slug} game={game}/>
            ))}
        </div>
    )
}