import { delay } from "./Delay";

export const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;


export const authenticate = async () => {
    const clientId = process.env.TWITCH_CLIENT_ID;

    if (!clientId) {
        throw new Error('Missing client id');
    }

    if (!clientSecret) {
        throw new Error('Missing client secret');
    }

    const params = new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': clientId,
        'client_secret': clientSecret,
    });
    const res = await fetch(`https://id.twitch.tv/oauth2/token?${params}`, {
        method: 'POST'
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error('Failed to authenticate: ' + err);
    }

    //artificial delay carried from Jay's code
    delay(500);

    const authRes = await res.json();
    return authRes.access_token as string;
}