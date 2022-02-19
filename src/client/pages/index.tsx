import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../components/UI/Button'
import { Input } from '../components/UI/Input'
import { Spinner } from '../components/UI/Spinner'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center">
      <Button Color="subtle" Size='base'  IsLoading={isLoading}>Test</Button>
    </div>
  )
}

export default Home
