import Container from "@components/Container";
import { Flex } from "@components/Flex";
import ProductsGrid from "@components/PorductsGrid";
import SubTitle from "@components/Typography/SubTitle";
import Title from "@components/Typography/Title";
import { useFavorites } from "@lib/hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Flex align="center" direction="column" gap="6">
        <Title>Lista de favoritos</Title>
        <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
        <ProductsGrid products={favorites} />
      </Flex>
    </Container>
  )
}

export default Favorites
