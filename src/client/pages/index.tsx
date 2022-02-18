import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/UI/Button'
import { Input } from '../components/UI/Input'

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button>Button</Button>
    </div>
  )
}

export default Home
