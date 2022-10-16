import type { NextPage } from 'next'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='dark:bg-gray-900 dark:transition-all duration-300'>
      <div className='container mx-auto'>
        <Navbar/>
      </div>
      </div>
    </div>
  )
}

export default Home
