import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { Loading } from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import { ROUTER_URL } from '../config/router.url';

export default function Home() {
  const router = useRouter();
  const { limit = 40, offset = 0 } = router.query;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePagination = newPaginationData => {
    router.push({
      pathname: ROUTER_URL.BASE(),
      query: {
        limit: newPaginationData.limit,
        offset: newPaginationData.offset
      }
    });
  };

  useEffect(() => {
    const getAllPokemon = async () => {
      setIsLoading(true);

      const response = await new PokemonService().get({ limit, offset });

      if (response && response.results) {
        setData(response);
      }

      if (response && response.error) {
      }
      setIsLoading(false);
    };

    getAllPokemon();
  }, [limit, offset]);

  return (
    <>
      <h1 className="title">Welcome to Pokedex</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {isLoading && <Loading />}

        {!isLoading &&
          data &&
          data.results.map(pokemon => (
            <PokemonCard key={`pokemon-${pokemon.name}`} name={pokemon.name} />
          ))}
      </div>

      {!isLoading && data && (
        <Pagination
          limit={parseInt(limit)}
          offset={parseInt(offset)}
          total={parseInt(data.count)}
          onChangeParams={handleChangePagination}
        />
      )}
    </>
  );
}
