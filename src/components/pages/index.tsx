import styles from './index.module.css'
import { SiFirebase } from 'react-icons/si'

const Home = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className="flex h-full w-full items-center">
          <p className="font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5">
            The Firebase playground <SiFirebase color="orange" />
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
