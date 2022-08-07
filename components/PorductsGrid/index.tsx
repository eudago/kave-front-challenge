import { Grid } from "@components/Grid";
import { Product as ProductType } from "@lib/types/product";
import Product from "./Product";

interface ProductsGridProps {
    products: Array<ProductType>;
}

export default function ProductsGrid({products}: ProductsGridProps) {
  return <Grid css={{gap: '1rem'}}>
    {products && products.map(product => <Product key={product.productSku} product={product} />)}
  </Grid>
}