"use client"
import {Fragment, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {Logo} from "@/app/[lng]/components/Logo";
import {LanguageSwitcher} from "@/app/[lng]/components/LanguageSwitcher";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Navigation = ({items, lang}) => {

  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false);


  const categories = items.map(category=>{

    const {name, slug } = category

      return {name, href: `/${lang}/${slug}`, current: pathname === `/${lang}/${slug}`}

  })


  return <Disclosure as="nav" className="">
    {({ open }) => (
      <>
        <div className="mx-4">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Logo lng={lang} pathname={pathname} />
              </div>
              <div className="hidden md:block sm:block">
                <button
                  onClick={()=>setMenuOpen(!menuOpen)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {menuOpen ?
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> :
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  } Menu
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              {/* languages */}
              <LanguageSwitcher lng={lang} />
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden bg-gray-200 lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {categories.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-300 text-gray-500' : 'text-gray-600 hover:bg-gray-600 hover:text-white transition ease-out duration-100',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>

        {menuOpen && <>
          <div className="flex w-full bg-gray-200 rounded-lg transition ease-in-out duration-1000 hidden md:block sm:block">
            <div className="w-full ">
              {categories.map(({name, current, href}, index)=>(<div key={index} className={classNames(
                  current ? 'bg-gray-300 text-gray-500' : 'text-gray-600 hover:bg-gray-600 hover:text-white transition ease-out duration-100',
                  'block rounded-md px-3 py-2 text-base font-medium'
              )}>
                <Link href={href}>
                  {name}
                </Link>

              </div>))}
            </div>
          </div>
          </>}
        </>
    )}
  </Disclosure>
}