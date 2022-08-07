import { styled } from "stitches.config";

export const Grid = styled('div', {
    boxSizing: 'border-box',
    display: 'grid',
    gridAutoRows: 'minmax(300px, auto)',
    '@M': {
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
    '@D': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    }
});
  