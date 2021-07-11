import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {gql, useQuery} from "@apollo/client";

const randData = gql`
    query Query {
        orders {
            id
            customer {
                name
            }
            meals {
                protein
                status
            }
            status
        }
    }
`
function RandomData() {
    const {loading, error, data} = useQuery(randData);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) return <p>Hello!</p>
    // return data.orders.map((customer, status) => {
    //
    // })
}

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
          <RandomData />
      </main>
    </div>
  )
}
