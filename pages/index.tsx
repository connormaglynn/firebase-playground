import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import React from 'react'
import { SiFirebase } from 'react-icons/si'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.landing}>
        <div className="flex h-full w-full items-center">
          <p className="font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5">
            The FireBase playground <SiFirebase color="orange" />
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
