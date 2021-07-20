import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CustomerContactInfo from "../components/SingleOrder";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bucket List Bodies</title>
        <meta name="description" content="Bucket list bodies is a good place to get food from!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h2>
              <CustomerContactInfo customerId={1}/>
          </h2>
      </main>
    </div>
  )
}
