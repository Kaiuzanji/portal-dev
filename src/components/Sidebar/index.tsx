/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft, IdentificationBadge, Money, ChatCircleText, SignOut } from 'phosphor-react'

const items = [
  {
    name: 'Crachá Digital',
    link: '/profile',
    icon: <IdentificationBadge size={28} />
  },
  {
    name: 'Contra Cheque',
    link: '/paycheck',
    icon: <Money size={28} />
  },
  {
    name: 'Service Desk',
    link: '/servicedesk',
    icon: <ChatCircleText size={28} />
  },
  {
    name: 'Sair',
    link: '/',
    icon: <SignOut size={28} />
  }
]

const Sidebar = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void}) => {
    const router = useRouter()
    return (
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-0" onClose={setOpen}>
            <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </Transition.Child>
            <div className='inset-0 overflow-hidden'>
              <div className="inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-sm pl-0">
                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-[-100%]" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-[-100%]">
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col bg-slate-200 dark:bg-zinc-700 dark:text-slate-400 shadow-xl">
                        <div className="px-4 sm:px-6 bg-zinc-800 py-3">
                            <Dialog.Title className="text-lg font-medium text-slate-200 flex items-center justify-between"> 
                                <span>Navegação</span>
                                <button onClick={() => setOpen(false)} className='p-2 rounded-full text-slate-200'>
                                    <ArrowLeft size={28} />
                                </button>
                            </Dialog.Title>
                        </div>
                        <div className="relative flex-1 flex flex-col">
                        {/* Replace with your content */}
                        {
                          items.map( (item, i) => {
                            return (
                              <Link key={i} href={item.link}>
                                <a className={`${ router.pathname === item.link ? "text-[#20bead]" : "bg-transparent" } w-full h-14 p-4 gap-4 flex flex-row justify-start items-center shadow-sm`}>
                                  {item.icon}
                                  <span>{item.name}</span>
                                </a>
                              </Link>
                            )
                          })
                        }
                        {/* /End replace */}
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}

export default Sidebar