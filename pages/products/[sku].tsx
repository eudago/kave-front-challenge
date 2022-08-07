import { Flex } from "@components/Flex"
import { Img } from "@components/Img"
import { ApiResults } from "@lib/types/api"
import { Product as ProductType } from "@lib/types/product"
import { styled } from "stitches.config"

const ProductImageContent = styled('div', {
    position: 'relative',
    '@M': {
      width: '100%',
      height: '50vh',
    },
    '@D': {
      width: '60%',
      height: '100%',
    }
})

const ProductDescription = styled('div', {
    paddingX: '$4',
})

const ProductContent = styled('div', {
  height: '100%',
  display: 'flex',
  '@M': {
    flexDirection: 'column',
  },
  '@D': {
    flexDirection: 'row',
  }
})

const ProductCollectionText = styled('h1', {
  fontFamily: '$poppins',
  fontWeight: 500,
  margin: '0',
})

const ProductCategoryHierarchyText = styled('span', {
  fontFamily: '$poppins',
  color: '#828280',
  fontWeight: 400,
  margin: '0',
  marginBottom: '$5',
})

const ProductPriceText = styled('h3', {
  fontFamily: '$poppins',
  fontWeight: 500,
  margin: '0',
})

const ProductNameText = styled('h4', {
  fontFamily: '$poppins',
  fontWeight: 400,
  margin: '0',
})

interface ProductProps {
    product: ProductType
}

const Product = ({product} : ProductProps) => {
  const { productImageUrl, productName, productPrice, productCategoryHierarchy, productCollection } = product;

  return (
    <ProductContent>
      <ProductImageContent>
        <Img src={productImageUrl} alt={productName} layout="fill" />
      </ProductImageContent>
      <ProductDescription>
        <Flex direction="column">
          <ProductCollectionText>{productCollection}</ProductCollectionText>
          <ProductCategoryHierarchyText>{productCategoryHierarchy}</ProductCategoryHierarchyText>
          <ProductPriceText>{productPrice} €</ProductPriceText>
          <ProductNameText>{productName}</ProductNameText>
        </Flex>
      </ProductDescription>
    </ProductContent>
  )
}

export async function getStaticPaths() {
  const response = await fetch(process.env.API_URL!)
  const products: ApiResults<ProductType> = await response.json()
  
  const paths = products.results.map(product => ({ params: { sku: product.productSku.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const response = await fetch(process.env.API_URL!)
  const products: ApiResults<ProductType> = await response.json()
  const product = products.results.find(product => product.productSku === params.sku)

  return {
    props: {
      product
    },
  };
}

export default Product
