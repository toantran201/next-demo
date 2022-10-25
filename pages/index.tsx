import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
//
import styles from '~/styles/Home.module.scss'
import variables from '../styles/variables.module.scss'
//
import elephant from '~/public/images/elephant.webp'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title} style={{ color: variables.primaryColor }}>
        Index
      </h1>
      <div style={{ width: '300px', height: '150px', position: 'relative' }}>
        <Image src={elephant} alt="Elephant" layout="fill" objectFit="cover" priority />
      </div>
      <br />
      <Link href="/posts">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>Posts</a>
      </Link>
    </div>
  )
}

export default Home
