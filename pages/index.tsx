import SubHeader from '@components/SubHeader'
import H1 from '@components/Typography/H1'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
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
    </div>
  )
}

export default Home
