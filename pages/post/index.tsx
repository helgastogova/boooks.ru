import prisma from '@lib/prisma';

import Loader from '@ui/loader';
import Text from '@ui/text';
import ContentInner from '@ui/contentInner';

import {GetStaticProps} from 'next';

const Post: React.FC = ({props}: any) => {
  console.log(props, 'feed');
  return null; //<ContentInner>{pageItems}</ContentInner>;
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true},
      },
    },
  });
  return {props: {feed}};
};

export default Post;
