import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddressInput from "../components/AddressInput";
import OrderInput from "../components/OrderInput";

/*todo:
            -   Header
            -   Mobile Styling
            -   Multi page routing
            -   Footer
            -   Header and Footer app bars
            -   What are the other pages.
            */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bucket List Bodies</title>
        <meta name="description" content="Bucket list bodies is a good place to get food from!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header style={}

      <main className={styles.main}>
                <AddressInput/>
          <OrderInput/>
      </main>
        <footer className={styles.footer}>
            Hello World!
        </footer>
    </div>
  )
}
