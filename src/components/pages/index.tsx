import type { NextPage } from 'next'
import styles from './index.module.css'
import Layout from '../layout'
import React from 'react'
import { SiFirebase } from 'react-icons/si'

const Home = () => {
  return (
    <Layout>
      <div className={styles.landing}>
        <div className="flex h-full w-full items-center">
          <main>
            <p className="font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5">
              The Firebase playground <SiFirebase color="orange" />
            </p>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Home
