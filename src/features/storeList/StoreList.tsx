import { getStores } from '@/components/api/getStores';
import StoreCard from '@/features/customUI/StoreCard';
import { Store } from '@/interfaces/interfaces';

export default async function StoreList() {
  const { results } = await getStores();

  return (
    <div className="game-grid">
      {results.map((store: Store) => (
        <div key={store.name}>
          <StoreCard store={store} key={store.id} />
        </div>
      ))}
      ;
    </div>
  );
}
