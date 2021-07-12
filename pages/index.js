import Head from 'next/head'
import styles from '../styles/Home.module.css'
import RandomData from "../components/SingleOrder";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bucket List Bodies</title>
        <meta name="description" content="Bucket list bodies is a good place to get food from!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bucket List Bodies
        </h1>
          <h2>
              <RandomData />
          </h2>
      </main>
    </div>
  )
}
