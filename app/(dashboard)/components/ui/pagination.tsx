type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalItems === 0) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white border border-t-0 border-gray-200 rounded-b-xl">
      <p className="text-sm text-gray-500 text-center sm:text-left">
        Showing <span className="font-semibold text-dark">{startItem}</span> to{" "}
        <span className="font-semibold text-dark">{endItem}</span> of{" "}
        <span className="font-semibold text-dark">{totalItems}</span> entries
      </p>

      <div className="flex gap-2 w-full sm:w-auto">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-bold bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-all cursor-pointer"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-bold bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-all cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
