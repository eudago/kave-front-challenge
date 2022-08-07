import Container from "@components/Container"
import { Flex } from "@components/Flex"
import Pagination from "@components/Pagination"
import ProductsGrid from "@components/PorductsGrid"
import SubTitle from "@components/Typography/SubTitle"
import Title from "@components/Typography/Title"
import { ApiResults } from "@lib/types/api"
import { Product } from "@lib/types/product"
import { useState } from "react"

const PAGE_SIZE = 9

interface ProductsProps {
  products: Array<Product>
}

const Products = ({products} : ProductsProps) => {

  const [productsPage, setProductsPage] = useState(products.slice(0, PAGE_SIZE))
  const [currentPage, setCurrentPage] = useState(1)

  const onPagination = (page: number) => {
    setCurrentPage(page)
    setProductsPage(products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE))
  }

  return (
    <Container>
      <Flex align="center" direction="column" gap="6">
        <Title>Productos</Title>
        <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
        <ProductsGrid products={productsPage} />
      
        <Pagination elementsSize={products.length} 
          pageSize={PAGE_SIZE} 
          currentPage={currentPage} 
          onPagination={onPagination} />
      </Flex>
    </Container>
  )
}

export async function getStaticProps() {
  const response = await fetch(process.env.API_URL!)
  const products: ApiResults<Array<Product>> = await response.json()

  return { props: { 
    products: products.results,
  }};
}

export default Products
