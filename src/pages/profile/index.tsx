import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
const Index: NextPage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>Portal Dev - Crachá Digital</title>
      </Head>
      <Sidebar open={isOpenSidebar} setOpen={setIsOpenSidebar} />
      <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <div className='flex py-4 px-4 sm:px-6 lg:px-8'>
        <header className='w-full'>
          <h4 className="text-3xl text-zinc-400 mb-5">Crachá Digital</h4>
          <hr className='border-zinc-500' />
        </header>
      </div>
    </>
  )
}

export default Index
