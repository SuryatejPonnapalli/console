'use client'

import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { MdLogout } from 'react-icons/md'
import { handleSignout } from '@/apollo/client'

export default function UserMenu() {
  const { data: session } = useSession()

  const firstName = session?.user?.name?.split(' ')[0]

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center gap-2 rounded-full text-xs font-medium text-black dark:text-white hover:text-emerald-500 dark:hover:text-emerald-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div
              className="h-8 w-8 rounded-full bg-center bg-cover bg-no-repeat ring-white"
              style={{ backgroundImage: `url(${session?.user?.image})` }}
            ></div>
            <div className="flex flex-col">{firstName}</div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 -right-2 top-12 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-neutral-200 dark:bg-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSignout({ callbackUrl: `${window.location.origin}` })}
                    className={`${
                      active
                        ? 'hover:text-emerald-500 dark:text-white dark:hover:text-emerald-500'
                        : 'text-gray-900 dark:text-white dark:hover:text-emerald-500'
                    } group flex w-full gap-1 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <MdLogout />
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}