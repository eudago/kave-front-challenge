import { useMemo } from "react";

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface UsePaginationProps {
  elementsSize: number;
  pageSize: number;
  currentPage: number;
  maxPagesToShow: number;
}

export const usePagination = ({
  elementsSize,
  pageSize,
  currentPage,
  maxPagesToShow,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(elementsSize / pageSize);

    if (maxPagesToShow >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const pages = Math.min(maxPagesToShow, totalPageCount);

    const start = Math.max(1, Math.ceil(currentPage - pages / 2));
    const end = Math.min(totalPageCount - 1, start + pages - 1);

    return range(start, end);
  }, [elementsSize, pageSize, currentPage, maxPagesToShow]);

  return paginationRange;
};
