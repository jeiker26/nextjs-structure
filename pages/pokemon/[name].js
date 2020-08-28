import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Loading } from '../../components/Loading';

function PokemonDetail() {
  const router = useRouter();
  const { name } = router.query;

  const { isLoading, error, data } = useQuery(
    `pokemon-details-${name}`,
    () => name && new PokemonService().getByName(name)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return (
      <div className="container">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
          <img
            className="w-full h-56 object-cover object-center"
            src={data.sprites.front_default}
            alt="avatar"
          />
          <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              {data.name}
            </h1>
            {data.stats.map(dataStat => (
              <div
                className="flex items-center mt-4 text-gray-700"
                key={`data-stat-${dataStat.stat.name}`}
              >
                <h3 className="px-2 text-sm">{dataStat.stat.name}</h3>
                <h3 className="px-2 text-sm">{dataStat.base_stat}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div>Ups! an error was found.</div>;
}

PokemonDetail.propTypes = {};

export default PokemonDetail;
