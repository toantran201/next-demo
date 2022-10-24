import {Post} from "~/models/common";
import {GetStaticPropsContext} from "next";
import dayjs from "dayjs";
import {useRouter} from "next/router";
import Link from "next/link";
import {fetchPopularPostIds, fetchPost} from "~/fake-api";

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

export default Post

export async function getStaticPaths() {
  const ids = await fetchPopularPostIds()
  console.log('ids', ids)
  const paths = ids.map(item => ({
    params: {id: item.toString()}
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params!
  if (!params.id) {
    return {
      notFound: true
    }
  }
  const data = await fetchPost(+params.id)

  return {
    props: {
      post: data,
    }
  }

}