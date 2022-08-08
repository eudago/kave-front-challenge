import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FavoriteButton from '@components/FavoriteButton'

describe('FavoriteButton', () => {
  it('is not favorite', () => {
    const { container } = render(<FavoriteButton favorite={false} />)

    const svgFavorite = container.querySelector("svg path") as HTMLImageElement;
    expect(svgFavorite).toBeInTheDocument()
    expect(svgFavorite).toHaveAttribute('fill', 'none')
  })
  
  it('is favorite', () => {
    const { container } = render(<FavoriteButton favorite={true} />)

    const svgFavorite = container.querySelector("svg path") as HTMLImageElement;
    expect(svgFavorite).toBeInTheDocument()
    expect(svgFavorite).toHaveAttribute('fill', 'rgb(255, 61, 58)')
  })
})