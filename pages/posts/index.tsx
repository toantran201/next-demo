import Link from "next/link";
import {Post} from "~/models/common";

// interface PostsProps {
//   posts: Post[]
// }

const Posts = () => {
  const posts: Post[] = new Array(102).fill(null).map((item, index) => ({
    id: index,
    userId: 1,
    body: `body ${index}`,
    title: `title ${index}`
  }))
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map(item => (
            <li key={item.id}>
              <a href={`/posts/${item.id}`}>
                {item.title}
              </a>
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await response.json()
//   return {
//     props: {
//       posts: data
//     }
//   }
// }