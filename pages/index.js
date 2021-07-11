import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {gql, useQuery} from "@apollo/client";

const randData = gql`
    query Query {
        orders {
            id
            customer {
                name
                address {
                    city
                    line1
                    line2
                    postal
                    state
                }
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
    if (error) return <p>Error :({console.log(error)}</p> ;
    if (!data) return <p>No Data!</p>

    return data.orders.map((data)=> (
        <div>
            <h3>{data.customer.name}</h3>
            <p>{data.customer.phone}</p>
            <p>{data.customer.address.line1}</p>
            <p>{data.customer.address.city}</p>
            <p>{data.customer.address.postal}</p>
            <p>{data.meals.map((mealData) => (
                <h1>{mealData.protein}</h1>
            ))}</p>
        </div>
    ));

};

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
