import PropTypes from 'prop-types';
import Link from 'next/link';
import { ROUTER_URL } from '../config/router.url';

function PokemonCard({ name }) {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        <Link href={ROUTER_URL.POKEMON_DETAIL_STATIC()} as={ROUTER_URL.POKEMON_DETAIL(name)}>
          <a className="py-2 text-lg text-gray-700">See details</a>
        </Link>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default PokemonCard;
