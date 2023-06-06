import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import {config} from "../lib/config";
import React from "react";
import { SiFirebase } from 'react-icons/si';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className={styles.landing}>
          <div className="flex h-full w-full items-center">
            <p className="font-brand text-6xl text-white bg-accent-1 bg-opacity-95 p-5">
              The FireBase playground <SiFirebase color="orange" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
