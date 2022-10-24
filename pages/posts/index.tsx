import Link from "next/link";
import {Post} from "~/models/common";

// interface PostsProps {
//   posts: Post[]
// }

const Posts = () => {
  const posts: Post[] = new Array(100).fill(null).map((item, index) => ({
    id: index + 1,
    userId: 1,
    body: `body ${index + 1}`,
    title: `title ${index + 1}`
  }))
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
        <li>
          <Link href={'/posts/[id]'} as={`/posts/101`} prefetch={false}>
            <a>Page 101</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/[id]'} as={`/posts/102`} prefetch={false}>
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