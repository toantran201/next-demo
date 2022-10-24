import {Post} from "~/models/common";
import {GetStaticPropsContext} from "next";
import dayjs from "dayjs";
import {useRouter} from "next/router";
import Link from "next/link";

interface PostProps {
  post: Post
}

const Post = ({post}: PostProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading....</p>
  }
  console.dir(post)
  return (
    <div>
      <h1 style={{textTransform: "capitalize"}}>{post.title}</h1>
      <small>{dayjs().format('YYYY-MM-DD')}</small>
      <p>{post.body}</p>
      <Link href='/posts'>
        <a style={{color: 'blue', textDecoration: 'underline'}}>Back to Posts &#8594;</a>
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Post[] = await response.json()

  const paths = data.map(item => ({
    params: {id: item.id.toString()}
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const params = context.params!
  let data: Post
  if (params.id == "101") {
    data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 101,
          title: 'Post 101',
          body: 'Body 101',
          userId: 1
        })
      }, 2000)
    })
  } else {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    data = await response.json()
  }

  return {
    props: {
      post: data,
    }
  }

}

export default Post