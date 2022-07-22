import { useState, createContext, useEffect } from 'react'

type DarkModeContextProps = {
  isDarkMode: boolean,
  setIsDarkMode: (value: boolean) => void,
}

type DarkModeProviderProps = {
  children: React.ReactNode
}

export const DarkModeContext = createContext({} as DarkModeContextProps)

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const handleDarkMode = (isDarkMode:boolean) => {
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }

  const initializeDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }
  
  useEffect(() => initializeDarkMode(), [])

  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode: handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}