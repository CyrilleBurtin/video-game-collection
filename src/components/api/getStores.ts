import { STORES } from '@/components/api/apiUrls';
import { Store } from '@/interfaces/interfaces';

interface StoreResponse {
  results: Store[];
}

export async function getStores(): Promise<StoreResponse> {
  try {
    const response = await fetch(STORES);

    return response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}
