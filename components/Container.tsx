import { styled } from "stitches.config";

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',
  paddingY: '$6',
  '@M': {
    maxWidth: '100%',
  },
  '@D': {
    maxWidth: '1200px',
  }
})

export default Container;