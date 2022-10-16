import type { NextPage } from 'next'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Mode } from '../types'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Navbar/>
      </div>
    </>
  )
}

export default Home
