import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Atom, Moon, Sun } from 'phosphor-react'
import Switch from './../components/Switch'
import { DarkModeContext } from './../context/DarkMode'
import LoginForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const Index: NextPage = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false)
  const [signInFormValues, setSignInFormValues] = useState<SignInFormValueType>({
    email: "",
    password: ""
  })
  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormValueType>({
    fullName: "",
    cpf: "",
    avatar: "",
    email: "",
    password: ""
  })

  return (
    <>
      <Head>
        <title>Portal Dev - Login</title>
      </Head>
      {/*  Component Login - START */}
      <div className={`min-h-full flex items-center justify-center py-4 px-4 ${ hasAccount ? "mt-1" : "mt-20"} sm:px-6 lg:px-8`}>
        <div className={`font-medium max-w-lg w-full space-y-6 rounded-md bg-white dark:bg-zinc-700 shadow-lg p-4 z-10`}>
          <header className='flex flex-col justify-between sm:flex-row sm:gap-2'>
            <span className='flex flex-row'>
              <Atom className='w-10 h-10 text-[#20bead]' />
              <span className='text-3xl dark:text-[#20bead]' translate='no'>Portal Dev</span>
            </span>
            <div className='m-1'>
              <Switch enabled={hasAccount} setEnabled={setHasAccount} checkedText='Sign In' uncheckedText='Sign Up' />
            </div>
          </header>
          {
            !hasAccount 
            ? <LoginForm signInFormValues={signInFormValues} setSignInFormValues={setSignInFormValues}  />
            : <SignUpForm  signUpFormValues={signUpFormValues} setSignUpFormValues={setSignUpFormValues} />
          }
        </div>
      </div>
      {/*  Component Login - END */}
      <footer className='object-cover left-0 bottom-0 absolute z-0 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#20bead" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,224C672,256,768,288,864,261.3C960,235,1056,149,1152,117.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </footer>
    </>
  )
}

export default Index
