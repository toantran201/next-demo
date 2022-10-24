import type {NextPage} from 'next'
import Link from "next/link";
//
import styles from '~/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Index</h1>

      <Link href='/posts'>
        <a style={{color: 'blue', textDecoration: 'underline'}}>Posts</a>
      </Link>
    </div>
  )
}

export default Home
