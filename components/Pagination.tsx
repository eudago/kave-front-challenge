import { usePagination } from "@lib/hooks/usePagination";
import { Flex } from "@components/Flex";
import { styled } from "stitches.config";

const PageLink = styled("a", {
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
});

interface PaginationProps {
    currentPage: number;
    elementsSize: number;
    pageSize: number;
    onPagination: (page: number) => void;
}

export default function Pagination({ currentPage, elementsSize, pageSize, onPagination }: PaginationProps) {
    const paginationRange = usePagination({
        currentPage,
        elementsSize,
        pageSize,
        maxPagesToShow: 8
    });
    
    return <>
        <Flex gap="4">
            {paginationRange && paginationRange.map(page => (<PageLink key={page} 
                onClick={() => {onPagination(page)}}                
                css={{ fontWeight: page === currentPage ? 700: 500 }}>
                {page}
            </PageLink>))}
        </Flex>
    </>
}