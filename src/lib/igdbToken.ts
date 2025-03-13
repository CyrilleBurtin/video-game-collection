// lib/igdbToken.ts
'use server';

let cachedToken: string | null = null;

export async function getCachedToken() {
  if (!cachedToken) {
    console.log('Récupération d’un nouveau token');
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.AUTH_TWITCH_CLIENT_ID!,
        client_secret: process.env.AUTH_TWITCH_CLIENT_SECRET!,
        grant_type: 'client_credentials',
      }),
    });

    if (!response.ok) {
      throw new Error('Échec de la récupération du token Twitch');
    }

    const data = await response.json();
    cachedToken = data.access_token;
  }
  return cachedToken;
}
