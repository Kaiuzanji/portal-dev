import { Fragment, useState, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { List, Atom, Sun, Moon } from 'phosphor-react'
import { DarkModeContext } from '../../context/DarkMode'

interface NavbarProps {
  isOpenSidebar: boolean,
  setIsOpenSidebar: (value: boolean) => void
}

export default ({ isOpenSidebar, setIsOpenSidebar }: NavbarProps) => {
  const { isDarkMode, setIsDarkMode} = useContext(DarkModeContext)
  return (
    <Disclosure as="nav" className="bg-slate-100">
      <div className="w-100 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setIsOpenSidebar(!isOpenSidebar)} className='bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors delay-100'>
              <List className='text-slate-800' size={28} />
            </button>
          </div>
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-row items-center p-2">
              <Atom size={35} className="text-[#20bead]" />
              <span className="text-2xl">Portal Dev</span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className='p-2 rounded-full w-10 h-10 shadow-md flex justify-center items-center'>
              { isDarkMode ? <Sun size={28} className='text-[#20bead]' /> : <Moon size={28} className='text-[#20bead]' />}
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}