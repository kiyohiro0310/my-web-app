import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DevsSection from '../components/devs/devs-section';
import IntroSection from '../components/introduction/intro-section'
import PostSection from '../components/posts/post-section';
import SkillSection from '../components/skills/skills-section';
import { connectToDatabase, createFiles, getAllDBContent } from '../lib/db-utils';
import { getAllFilesContent } from '../lib/post-utils';
import { FileModel } from '../Model/file-model';

interface TypeProps {
  allPostsContent: FileModel[];
}
const Home: NextPage<TypeProps> = (props) => {
  const { allPostsContent } = props

  return (
    <div>
      <Head>
        <meta name='description' content='Kiyohiro Kambayashi is a web developer in Australia.'/>
      </Head>
      <IntroSection />
      <SkillSection />
      <PostSection allPosts={allPostsContent}/>
      <DevsSection />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = await connectToDatabase();

  const allFilesContent = await getAllDBContent(client, "LearnPosts");

  createFiles(allFilesContent);

  const allPostsContent = getAllFilesContent();

  return {
    props: {
      allPostsContent: allPostsContent
    }
  }
}

export default Home;