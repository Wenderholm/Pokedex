import {
  PaginationWrapper,
  PaginationButton,
  PaginationInfo,
} from "./Pagination.styled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀ Prev
      </PaginationButton>

      <PaginationInfo>
        Page {currentPage} / {totalPages}
      </PaginationInfo>

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next ▶
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
