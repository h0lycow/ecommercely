import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <ul>
          <h1>Products</h1>
          <li>Prod 1</li>
          <li>Prod 2</li>
          <li>Prod 3</li>
        </ul>
      </div>
    </Layout>
  )
}
