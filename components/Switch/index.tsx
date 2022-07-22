import { useState } from 'react'
import { Switch } from '@headlessui/react'

type SwitchProps = {
  enabled: boolean,
  setEnabled: (value: boolean) => void,
  checkedText: string,
  uncheckedText: string
}

export default ({ enabled, setEnabled, checkedText, uncheckedText }: SwitchProps ) => {
  return (
    <>
      <Switch
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className='bg-[#ddf1ee] dark:bg-zinc-600 relative inline-flex h-[38px] w-[175px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-20' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[90px] transform rounded-full bg-[#20bead] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        <span className={`absolute m-1 left-4 ${ enabled ? 'text-gray-500' : 'text-white' }`} translate="no">{checkedText}</span>
        <span className={`absolute m-1 right-2 ${ enabled ? 'text-white' : 'text-gray-500' }`} translate="no">{uncheckedText}</span>
      </Switch>
    </>
  )
}