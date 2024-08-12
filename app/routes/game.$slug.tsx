import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { getBySlug } from "~/utils/GamesApi";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug!;
    return await getBySlug(slug);
}

export default function GamePage() {
    const game = useLoaderData<typeof loader>();
    console.log(game);
    return (
        <div className="dark:text-white p-4">
            <h1 className="text-xl">{game.name}</h1>
            <ul>
                {Object.keys(game).map(key => (
                    //@ts-expect-error indexing using object keys
                    <li key={key}>{key} - {game[key]}</li>
                ))}
            </ul>
        </div>
    )
} 