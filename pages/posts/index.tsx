import {GetServerSideProps} from "next";
import {Post} from "~/models/common";
import Link from "next/link";

interface PostsProps {
  posts: Post[]
}

const Posts = ({posts}: PostsProps) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map(item => (
            <li key={item.id}>
              <Link href={'/posts/[id]'} as={`/posts/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))
        }
        <li>
          <Link href={'/posts/[id]'} as={`/posts/101`}>
            <a>Page 101</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/[id]'} as={`/posts/102`}>
            <a>Page 102</a>
          </Link>
        </li>
      </ul>
      <Link href='/'>
        <a style={{color: 'blue', textDecoration: 'underline'}}>Back to Home &#8594;</a>
      </Link>
    </div>
  )
}

export default Posts

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      posts: data
    }
  }
}