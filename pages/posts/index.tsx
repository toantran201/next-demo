import {GetServerSideProps} from "next";
import Link from "next/link";
//
import {Post} from "~/models/commons";
import {NextPageWithLayout} from "~/models/apps";
import {PostListLayout} from "~/src/layouts";

interface PostsProps {
  posts: Post[]
}

const Posts: NextPageWithLayout<PostsProps> = ({posts}) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map(item => (
            <li key={item.id}>
              <Link href={'/posts/[id]'} as={`/posts/${item.id}`} prefetch={false}>
                <a>
                  {item.title}
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
      <Link href='/'>
        <a style={{color: 'blue', textDecoration: 'underline'}}>Back to Home &#8594;</a>
      </Link>
    </div>
  )
}

export default Posts

export const getStaticProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:5000/posts')
  const data = await response.json()
  return {
    props: {
      posts: data
    },
    revalidate: 10
  }
}

Posts.getLayout = (page) => {
  return <PostListLayout>
    {page}
  </PostListLayout>
}

