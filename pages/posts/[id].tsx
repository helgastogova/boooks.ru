import Head from 'next/head';

import Layout from '@components/layout';
import Date from '@components/date';

import {getAllPostIds, getPostData} from '../../lib/posts';
import {GetStaticProps, GetStaticPaths} from 'next';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
