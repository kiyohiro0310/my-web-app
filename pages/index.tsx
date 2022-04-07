import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '../components/introduction/intro'
import Skills from '../components/skills/skills';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name='description' content='Kiyohiro Kambayashi is a web developer in Australia.'/>
      </Head>
      <Intro />
      <Skills />
    </div>
  )
}

export default Home
