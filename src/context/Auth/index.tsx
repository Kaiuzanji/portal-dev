import { useState, createContext, useEffect } from 'react'

type DataUserType = {
  fullName: string,
  cpf: string,
  avatar: FormFileValue | null,
  email: string,
  password: string
}

type AuthContextProps = {
  sign: boolean,
  setSign: (sign: boolean) => void
  dataUser: DataUserType | null,
  setDataUser: (dataUser: DataUserType) => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [sign, setSign] = useState<boolean>(true)
  const [dataUser, setDataUser] = useState<DataUserType | null>(null)

  return (
    <AuthContext.Provider value={{
      sign,
      setSign,
      dataUser,
      setDataUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}