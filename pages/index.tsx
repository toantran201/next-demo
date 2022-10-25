import type {NextPage} from 'next'
import Link from "next/link";
//
import styles from '~/styles/Home.module.scss'
import variables from '../styles/variables.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title} style={{color: variables.primaryColor}}>Index</h1>

      <Link href='/posts'>
        <a style={{color: 'blue', textDecoration: 'underline'}}>Posts</a>
      </Link>
    </div>
  )
}

export default Home
