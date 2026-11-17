function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="pagination">
      <button
      className="paginationbut"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="paginationspan">
        Page {currentPage} of {totalPages}
      </span>
      <button
      className="paginationbut"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
