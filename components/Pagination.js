import PropTypes from 'prop-types';

function Pagination({ limit, offset, total, onChangeParams }) {
  const limitOffset = offset + limit;
  const offsetNextButton = total > limitOffset ? limitOffset : total;
  const offsetPreviousButton = Math.max(0, offset - limit);

  return (
    <div className="flex">
      <button
        data-testid="btn-pagination-previous"
        disabled={!offset}
        onClick={() =>
          onChangeParams({
            limit,
            offset: offsetPreviousButton
          })
        }
        type="button"
        className={
          !offset
            ? `border border-teal-500 text-teal-500 block round(ed-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white opacity-50 cursor-not-allowed`
            : `border border-teal-500 text-teal-500 block round(ed-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white`
        }
      >
        Previous page
      </button>
      <button
        data-testid="btn-pagination-next"
        disabled={offsetNextButton === total}
        onClick={() =>
          onChangeParams({
            limit,
            offset: offsetNextButton
          })
        }
        type="button"
        className={
          total === offsetNextButton
            ? `border border-teal-500 text-teal-500 block round(ed-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white opacity-50 cursor-not-allowed`
            : `border border-teal-500 text-teal-500 block round(ed-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white`
        }
      >
        Next page
      </button>
      {limitOffset > total ? total : limitOffset} / {total}
    </div>
  );
}

Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChangeParams: PropTypes.func.isRequired
};

export default Pagination;
