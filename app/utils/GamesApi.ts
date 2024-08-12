import { Game } from "~/models/Games";
import { authenticate, clientId } from "./Twitch";

export interface GameListing {
    first_release_date: number;
    name: string;
    slug: string;
}

const getHeaders = async () => {
    const token = await authenticate();

    if (!clientId) {
        throw new Error('Missing client id');
    }

    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Client-ID': clientId,
    });

    return headers;
}

const handleRes = async (res: Response) => {
    if (!res.ok) {
        const err = await res.text();
        throw new Error('Failed to fetch games data: ' + err);
    }

    return await res.json();
}

export const getGames = async (search: string) => {
    const res = await fetch('https://api.igdb.com/v4/games', {
        headers: await getHeaders(),
        method: 'POST',
        body: `search "${search}"; fields name,first_release_date,slug; limit 50;`
    });
    
    const games = await handleRes(res);
    return games as GameListing[];
}

export const getBySlug = async (slug: string) => {
    const res = await fetch('https://api.igdb.com/v4/games', {
        headers: await getHeaders(),
        method: 'POST',
        body: `where slug = "${slug}"; fields *; limit 10;`
    });

    const games = await handleRes(res);
    return games[0] as Game;
}