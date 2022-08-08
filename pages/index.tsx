import { Button } from '@components/Button'
import Categories from '@components/Categories'
import Container from '@components/Container'
import { Flex } from '@components/Flex'
import ProductsGrid from '@components/PorductsGrid'
import SubHeader from '@components/SubHeader'
import H1 from '@components/Typography/H1'
import Title from '@components/Typography/Title'
import { ApiResults } from '@lib/types/api'
import { Product } from '@lib/types/product'
import Head from 'next/head'
import Link from 'next/link'

interface HomeProps {
  products: Array<Product>
}

const Home = ({products} : HomeProps) => {
  return (
    <div>
      <Head>
        <title>Kave Front Challenge</title>
        <meta name="description" content="Kave Front Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubHeader>
        <H1>Cuando la realidad supera la ficción.</H1>
        <H1>Trucos para estar en casa</H1>
      </SubHeader>

      <Container>
        <Flex justify="center" css={{marginY: '$6'}}>
          <Title>Inspírate</Title>
        </Flex>
        <Categories />

        <ProductsGrid products={products} />

        <Flex justify="center" css={{marginY: '$6'}}>
          <Link href="/products">
            <Button> VER TODOS LOS PRODUCTOS </Button>        
          </Link>
        </Flex>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(process.env.API_URL!)
  const products: ApiResults<Product> = await response.json()

  return { props: { products: products.results.slice(0, 9) } };
}

export default Home
