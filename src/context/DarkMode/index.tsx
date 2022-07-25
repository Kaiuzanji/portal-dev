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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const handleDarkMode = (isDarkMode:boolean) => {
    if(isDarkMode)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    setIsDarkMode(isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : '' )
  }

  const initializeDarkMode = () => handleDarkMode((localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches))
  
  useEffect(() => initializeDarkMode(), [])

  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode: handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}