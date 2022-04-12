import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { FileModel } from '../../Model/file-model'
import { getAllFiles, getOneFileContent } from '../../lib/post-utils';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import classes from "../../components/posts//posts-page/slug.module.scss"

import ReactMarkDown from "react-markdown";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import Head from 'next/head';

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", tsx);

interface TypeProps {
  content: FileModel;
}
const PostDetail: NextPage<TypeProps> = (props) => {
  const { slug, title, description, image, date, content } = props.content;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph: any) {
        const { node } = paragraph;
        if(node.children[0].tagName === "img"){
            const image = node.children[0];
            return (
                <div className={classes.image}>
                    <Image src={`/images/posts/${slug}/${image.properties.src}`} alt={image.alt} width={600} height={300}/>
                </div>
            )
        }
        return <p>{paragraph.children}</p>
    },
    code(code: any) {
        const { className, children } = code;
        const language = className.split("-")[1];
        // eslint-disable-next-line react/no-children-prop
        return <SyntaxHighlighter language={language} style={atomDark} children={children}/>
    }
}

  return (
    <div className={classes.detail_main}>
      <Head>
        <title>Oh yes! I&apos;ve learnt {title}</title>
        <meta name='description' content={description}/>
      </Head>
      <h1>Oh yes! I&apos;ve learnt <span className={classes.color}>{title}</span>!</h1>

      <div className={classes.detail_card}>
        <div className={classes.detail_header}>
          <h1>{title}</h1>
          <div className={classes.img}>
            <Image src={image} alt={`${title} image`} width={120} height={70}/>
          </div>
        </div>
        <time>{date}</time>
        <div className={classes.detail_content}>
          <ReactMarkDown components={customRenderers}>
            {content}
          </ReactMarkDown>

        </div>
      </div>

    </div>
  )
}

interface TypeContext extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params as TypeContext;

  const fileContent = getOneFileContent(slug);

  return {
    props: {
      content: fileContent
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allFiles = getAllFiles();
  const slugs = allFiles.map(file => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map(slug => ({ params: {slug: slug}})),
    fallback: "blocking"
  }
}

export default PostDetail;