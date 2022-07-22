import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Atom, Moon, Sun } from 'phosphor-react'
import Switch from './../components/Switch'
import { DarkModeContext } from './../context/DarkMode'

const SignIn: NextPage = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false)
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)

  return (
    <>
      <Head>
        <title>Portal Dev - Login</title>
      </Head>
      {/*  Component Login - START */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 mt-12 sm:px-6 lg:px-8">
        <span className='absolute top-0 right-0 m-6' onClick={() => setIsDarkMode(!isDarkMode)}>
          { isDarkMode ? <Sun size={28} /> : <Moon size={28}/> }
        </span>
        <div className="font-medium max-w-md w-full rounded-md space-y-8 bg-white dark:bg-zinc-700 shadow-lg p-4">
          <header className='flex flex-col justify-between sm:flex-row gap-2'>
            <span className='flex flex-row'>
              <Atom className='w-10 h-10 text-[#20bead]' />
              <span className='text-3xl dark:text-[#20bead]' translate='no'>Portal Dev</span>
            </span>
            <Switch enabled={hasAccount} setEnabled={setHasAccount} checkedText='Sign In' uncheckedText='Sign Up' />
          </header>
          <form className="mt-8 space-y-6" autoComplete='off'>
            <div className="rounded-md -space-y-px flex flex-col gap-2">
              <div>
                <label htmlFor="email-address" className="dark:text-zinc-300">Email address</label>
                <input id="email" name="email" type="email" className="appearance-none rounded-md bg-transparent relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="password" className="dark:text-zinc-300">Password</label>
                <input id="password" name="password" type="password" className="rounded-md bg-transparent form-input relative block w-full placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Senha" required  />
              </div>
            </div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#20bead] focus:outline-none">Entrar</button>
          </form>
        </div>
      </div>
      {/*  Component Login - END */}
      <footer className='object-cover left-0 bottom-0 absolute w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20bead" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,224C672,256,768,288,864,261.3C960,235,1056,149,1152,117.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </footer>
    </>
  )
}

export default SignIn
