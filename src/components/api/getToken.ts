'use server';

import { cookies } from 'next/headers';

const getToken = async () => {
  const cookieStore = await cookies();

  try {
    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&grant_type=client_credentials`,
      {
        method: 'POST',
      },
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const token = await response.json();
    for (const tokenKey in token) {
      cookieStore.set(tokenKey, token[tokenKey]);
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de la récupération du token :', error);
    throw error;
  }
};

export default getToken;
