import { Flex } from "@components/Flex";
import { styled } from "stitches.config";

const categoriesInspiration = ["Estancias", "Estil", "Muebles", "Decoración", "We are Kave", "Proyectos"];
const categories = ["We are Kave", "Estancias", "Muebles", "Decoración", "Proyectos", "Estilos"];

const CategoryTitle = styled('div', {
  padding: '$2',
  backgroundColor: '#F5F5F5',
  textDecoration: 'underline',
})

const CategoriesScroller = styled(Flex, {
  marginY: '$6',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'hidden',
  maxWidth: '100%',
  scrollSnapType: 'x mandatory',
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': {
    height: '0.5rem',
    background: '#f1f1f1'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  }
})

const CategoryCard = styled('div', {
  scrollSnapAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > a': {
    marginY: '$2',
    textDecoration: 'underline',
  }
})

const CategoryFakeImg = styled('div', {
  height: '12rem',
  width: '15rem',
  backgroundColor: '#F5F5F5',
})

export default function Categories() {
  return (
    <>
      <Flex wrap="wrap" justify="center" gap="2">
        {categoriesInspiration.map((category: string) => (
          <CategoryTitle key={category}>{category}</CategoryTitle>
        ))}        
      </Flex>

      <CategoriesScroller gap="5">
        {categories.map((category: string) => (
          <CategoryCard key={category}>
            <CategoryFakeImg />
            <a>{category}</a>
          </CategoryCard>
        ))}
      </CategoriesScroller>
    </>
  );
}