import { styled } from "stitches.config";

const H1 = styled('h1', {
    margin: '0',
    fontWeight: 'bold',
    color: '$loContrast',
    fontFamily: '$poppins',
    '@M': {
        fontSize: '1.5rem',
    },
    '@D': {
        fontSize: '3rem',
    },
});

export default H1;