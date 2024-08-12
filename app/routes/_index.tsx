import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GameList } from "~/components/game/list/GameList";
import { getGames } from "~/utils/GamesApi";

export const loader = async ({ request: { url } }: LoaderFunctionArgs) => {
  const u = new URL(url);
  const games = await getGames(u.searchParams.get('search') ?? '');
  return games;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Games List Remixed" },
    { name: "description", content: "This is a battle of the server components." },
  ];
};

export default function Index() {
  const games = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4">
      <GameList games={games}/>
    </div>
  );
}
