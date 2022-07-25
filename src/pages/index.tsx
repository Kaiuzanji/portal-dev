import { FormEvent, useContext, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Atom, Moon, Sun } from 'phosphor-react'
import { DarkModeContext } from '../context/DarkMode'
import LoginForm from '../components/Forms/SignInForm'
import Link from 'next/link'

const Index: NextPage = () => {
  const { isDarkMode, setIsDarkMode} = useContext(DarkModeContext)
  const [signInFormValues, setSignInFormValues] = useState<SignInFormValueType>({
    email: "",
    password: ""
  })

  const handleSubmitSignInForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(signInFormValues)
  }

  return (
    <>
      <Head>
        <title>Portal Dev - Login</title>
      </Head>
      <div className='h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
        <div className='font-medium max-w-lg w-full space-y-1 rounded-md bg-white dark:bg-zinc-700 shadow-lg p-4 z-10'>
          <header className='flex justify-between flex-row sm:gap-2'>
            <span className='flex flex-row'>
              <Atom className='w-10 h-10 text-[#20bead]' />
              <span className='text-3xl dark:text-[#20bead]' translate='no'>Portal Dev</span>
            </span>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className='p-2 rounded-full w-12 h-12 shadow-md flex justify-center items-center'>
              { isDarkMode ? <Sun size={28} className='text-[#20bead]' /> : <Moon size={28} className='text-[#20bead]' />}
            </button>
          </header>
          <LoginForm signInFormValues={signInFormValues} setSignInFormValues={setSignInFormValues} handleSubmitSignInForm={handleSubmitSignInForm}  />
          <div className='flex justify-center p-1'>
            <Link href="/register">
              <a className="text-[#20bead]">Don't have an account?</a> 
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
