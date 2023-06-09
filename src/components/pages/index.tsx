import styles from './index.module.css'
import Layout from '../layout'
import { SiFirebase } from 'react-icons/si'

const Home = () => {
  return (
    <Layout>
      <section className={styles.landing}>
        <div className="flex h-full w-full items-center">
          <main>
            <p className="font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5">
              The Firebase playground <SiFirebase color="orange" />
            </p>
          </main>
        </div>
      </section>
    </Layout>
  )
}

export default Home
