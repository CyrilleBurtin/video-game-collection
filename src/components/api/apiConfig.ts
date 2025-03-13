import { getCachedToken } from '@/lib/igdbToken';

const CLIENT_ID = process.env.AUTH_TWITCH_CLIENT_ID || '';
const token = await getCachedToken();

export const headers = new Headers({
  Accept: 'application/json',
  'Client-ID': CLIENT_ID,
  Authorization: `Bearer ${token}`,
});

export const API_URL: string = 'https://api.igdb.com/v4';
