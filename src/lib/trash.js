// Important

import Image from "next/image";
import importantMainImage from "../../public/600x330.png";
import squareImage from "../../public/600x600.png";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Logo} from "@/app/[lng]/components/Logo";
import {LanguageSwitcher} from "@/app/[lng]/components/LanguageSwitcher";
import mobileMain from "../../public/643x500.png";
import imageMain from "../../public/600x330.png";
import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";

const important = () => {

  return <>

    <section className=" bg-white">

      <div
          className="min-w-screen flex items-center overflow-hidden relative">

        <div className="w-full md:hidden rounded hover:shadow-md">
          <div className="flex ">
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {firstArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {secondArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {thirdArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {fourthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {fifthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {sixthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="flex ">
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {firstArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {secondArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {seventhArticle.titele}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {fourthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {fifthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
          <div className="w-full flex gap-4 justify-between p-5">
            <div className="w-1/4">
              <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
            </div>
            <div className="w-3/4">
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {sixthArticle.title}
              </h2>
              <span className="text-gray-400 text-sm">Category</span>
            </div>

          </div>
        </div>









      </div>











    </section>



    <div
      className="min-w-screen bg-yellow-300 flex items-center p-5 overflow-hidden relative">
    <div
        className="w-full rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left md:flex"
    >
      <div className="w-full md:w-3/4">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-2/3 px-10 md:mb-0">
            <div className="relative">
              <Image src={importantMainImage} className="w-full relative z-10" alt="" />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">Mens's Ragged Waterproof Jacket</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum!
                Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque
                quas id quo porro dolorum facilis... <a href="#"
                                                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i
                    className="mdi mdi-arrow-right"></i></a></p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                <span className="text-2xl leading-none align-baseline">.99</span>
              </div>
              <div className="inline-block align-bottom">
                <button
                    className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="w-64">
            <div className="bg-white shadow rounded-lg mb-6 tracking-wide">
              <div className="md:flex-shrink-0">
                <Image src={importantMainImage} alt='image' className="w-full rounded-lg rounded-b-none"/>
              </div>
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>
                <p className="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between mt-2 mx-6">
                  <a href="#" className="text-blue-500 text-xs -ml-3 ">Show More</a>
                  <a href="#" className="flex text-gray-700">
                    <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    5
                  </a>
                </div>
                <div className="author flex items-center -ml-3 my-3">
                  <div className="user-logo">

                  </div>
                  <h2 className="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4 md:px-4 mt-10">
            <div className="bg-white rounded-lg mb-6 tracking-wide">
              <div className="md:flex-shrink-0">
                <Image src={importantMainImage} alt='image' className="w-full rounded-lg rounded-b-none"/>
              </div>
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>
                <p className="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between mt-2 mx-6">
                  <a href="#" className="text-blue-500 text-xs -ml-3 ">Show More</a>
                  <a href="#" className="flex text-gray-700">
                    <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    5
                  </a>
                </div>
                <div className="author flex items-center -ml-3 my-3">
                  <div className="user-logo">

                  </div>
                  <h2 className="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4 md:px-4 mt-10">
            <div className="bg-white rounded-lg mb-6 tracking-wide">
              <div className="md:flex-shrink-0">
                <Image src={importantMainImage} alt='image' className="w-full rounded-lg rounded-b-none"/>
              </div>
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold ttext-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>
                <p className="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between mt-2 mx-6">
                  <a href="#" className="text-blue-500 text-xs -ml-3 ">Show More</a>
                  <a href="#" className="flex text-gray-700">
                    <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    5
                  </a>
                </div>
                <div className="author flex items-center -ml-3 my-3">
                  <div className="user-logo">

                  </div>
                  <h2 className="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4 md:px-4 mt-10">
            <div className="bg-white rounded-lg mb-6 tracking-wide">
              <div className="md:flex-shrink-0">
                <Image src={importantMainImage} alt='image' className="w-full rounded-lg rounded-b-none"/>
              </div>
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-gray-600 tracking-normal">My Amaizing Journey to the Mountains.</h2>
                <p className="text-sm text-gray-700 px-2 mr-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between mt-2 mx-6">
                  <a href="#" className="text-blue-500 text-xs -ml-3 ">Show More</a>
                  <a href="#" className="flex text-gray-700">
                    <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    5
                  </a>
                </div>
                <div className="author flex items-center -ml-3 my-3">
                  <div className="user-logo">

                  </div>
                  <h2 className="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/4">
        <section className="text-gray-800 text-center md:text-left">


          <div className="flex flex-wrap mb-6 mx-4 ">
            <Image src={squareImage} alt={"square"} className="rounded p-4" />

            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">

              <h5 className="text-sm font-bold mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</h5>
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor"
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/>
                </svg>
                Travels
              </div>
              <p className="text-gray-500 mb-6">
                <small>Published <u>13.01.2022</u> by
                  <a href="" className="text-gray-900">Anna Maria Doe</a></small>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mb-6 mx-4">


            <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 mr-auto">
              <h5 className="text-sm font-bold mb-3">Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe.</h5>
              <div
                  className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/>
                </svg>
                Business
              </div>
              <p className="text-gray-500 mb-6">
                <small>Published <u>10.01.2022</u> by
                  <a href="" className="text-gray-900">Joe Svan</a></small>
              </p>
            </div>
          </div>

        </section>
      </div>



    </div>




      {numOfItems === 2 && <>
        <div className="flex">

          <motion.div
              className="w-1/2 p-5 rounded hover:shadow-md"
              variants={variants}
              animate="visible"
              initial="hidden"
              exit="exit"
          >
            <Image
                width={643}
                height={500}
                src={items[0]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[0]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>
            <Link href={`/${lng}/${items[0]?.category.slug}/${items[0]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {items[0]?.title}
              </h2>
            </Link>
            <Link href={`/${lng}/${items[0]?.category.slug}`}>
          <span className="text-gray-400 text-sm">
            {items[0]?.category.title}
          </span>
            </Link>
          </motion.div>
          <motion.div
              variants={variants}
              animate="visible"
              initial="hidden"
              exit="exit"
              className="w-1/2 p-5 rounded hover:shadow-md">
            <Image
                width={643}
                height={500}
                src={items[1]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[1]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>
            <Link href={`/${lng}/${items[1]?.category.slug}/${items[1]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {items[0]?.title}
              </h2>
            </Link>
            <Link href={`/${lng}/${items[1]?.category.slug}`}>
          <span className="text-gray-400 text-sm">
          {items[1]?.category.title}
        </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="flex justify-between w-full p-5 hover:shadow-lg">
          <div className="w-1/4">
            <Image
                width={643}
                height={500}
                src={items[2]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[2]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4 mx-5">

            <Link href={`/${lng}/${items[2]?.category.slug}/${items[2]?.slug}`}>
              <h2 className=" mr-5 font-bold text-gray-800 text-md tracking-normal">
                {items[2]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[2]?.category.slug}`}>
              <span className="text-gray-400 text-sm"> {items[2]?.category.title}</span></Link>
          </div>
        </motion.div>
        <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="flex justify-between w-full p-5 hover:shadow-lg">
          <div className="w-1/4">
            <Image
                width={643}
                height={500}
                src={items[3]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[3]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4 mx-5">

            <Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {items[3]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[3]?.category.slug}`}>
              <span className="text-gray-400 text-sm"> {items[3]?.category.title}</span></Link>
          </div>
        </motion.div>
        <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="flex justify-between w-full p-5 hover:shadow-lg">
          <div className="w-1/4">
            <Image
                width={643}
                height={500}
                src={items[4]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[4]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4 mx-5">

            <Link href={`/${lng}/${items[4]?.category.slug}/${items[4]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal">
                {items[3]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[4]?.category.slug}`}>
              <span className="text-gray-400 text-sm"> {items[4]?.category.title}</span></Link>
          </div>
        </motion.div>
        <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="flex ">
          <div className=" w-1/3 justify-between w-full p-5 hover:shadow-lg">
            <Image
                width={643}
                height={500}
                src={items[5]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[5]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[5]?.category.slug}/${items[5]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {items[5]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[5]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[5]?.category.title}</span></Link>
          </div>
          <div className=" w-1/3 justify-between w-full p-5 hover:shadow-lg">
            <Image
                width={643}
                height={500}
                src={items[6]?.images.length === 1 &&
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    items[6]?.images[0].thumbnails.find(th=>th.rendition_id===3).path
                }
                alt={'image'}
                className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[6]?.category.slug}/${items[6]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {items[6]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[5]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[6]?.category.title}</span></Link>

          </div>
          <div className=" w-1/3 justify-between w-full p-5 hover:shadow-lg">
            <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[7]?.category.slug}/${items[7]?.slug}`}>
              <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
                {items[7]?.title}
              </h2></Link>
            <Link href={`/${lng}/${items[7]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[7]?.category.title}</span></Link>
          </div>
        </motion.div>
      </>}
      {numOfItems === 3 && <>
        {/*<div className="grid grid-cols-2">*/}
        {/*  {items.map(article=>(<div key={article.id} className="transition ease-in duration-300 p-5 justify-between unded hover:shadow-md">*/}
        {/*    <Image*/}
        {/*        width={643}*/}
        {/*        height={500}*/}
        {/*        src={items[0]?.images.length === 1 &&*/}
        {/*            process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*            article.images[0].thumbnails.find(th=>th.rendition_id===3).path*/}
        {/*        }*/}
        {/*        alt={'image'}*/}
        {/*        className="h-50 w-full object-cover rounded-md" />*/}

        {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}

        {/*    <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>*/}
        {/*      <h1 className="font-bold text-gray-800 text-md tracking-normal mt-5 transition ease-in duration-700">{article.title}</h1>*/}
        {/*    </Link>*/}
        {/*    <span className="text-gray-400 text-sm mt-5">{article.category.title}</span>*/}


        {/*  </div>))}*/}
        {/*</div>*/}
      </>}
      {numOfItems === 5 && <div className="flex">

        {/*<div*/}
        {/*    className="min-w-screen flex items-center overflow-hidden relative">*/}
        {/*  <div*/}
        {/*      className="w-full rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left md:flex"*/}
        {/*  >*/}
        {/*    <div className="w-full md:w-3/4 ">*/}
        {/*      <div className="md:flex relative">*/}
        {/*        <div className="w-full md:w-2/3 md:mb-0">*/}


        {/*          <Image*/}
        {/*              width={600}*/}
        {/*              height={330}*/}
        {/*              src={items[0]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[0]?.images[0].thumbnails.find(th=>th.rendition_id===1).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*        </div>*/}
        {/*        <div className="w-full md:w-1/3">*/}
        {/*          <div className="mt-5">*/}
        {/*            <Link href={`/${lng}/${items[0]?.category.slug}`}>*/}
        {/*              <span className="text-red-700 text-md uppercase font-bold">{items[0]?.category.title}</span>*/}
        {/*            </Link>*/}

        {/*            <Link href={`/${lng}/${items[0]?.category.slug}/${items[0]?.slug}`}>*/}
        {/*              <h1 className="mt-16 font-bold uppercase text-md mb-5 text-gray-600">{items[0]?.title}</h1>*/}
        {/*              <div className="text-sm text-gray-400">*/}
        {/*                {items[0]?.lead}*/}
        {/*              </div>*/}
        {/*            </Link>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="md:flex">*/}
        {/*        <div className="w-1/2 p-5 rounded hover:shadow-md">*/}


        {/*          <Image*/}
        {/*              width={600}*/}
        {/*              height={330}*/}
        {/*              src={items[1]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[1]?.images[0].thumbnails.find(th=>th.rendition_id===1).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*          <span className="text-gray-400 text-sm">2 hours ago</span>*/}

        {/*          <Link href={`/${lng}/${items[1]?.category.slug}/${items[1]?.slug}`}>*/}
        {/*            <h2 className="font-semibold text-gray-800 text-sm tracking-normal mt-5">*/}
        {/*              {items[1]?.title}*/}
        {/*            </h2>*/}
        {/*          </Link>*/}

        {/*          <Link href={`/${lng}/${items[1]?.category.slug}`}>*/}
        {/*            <span className="text-gray-400 text-sm">{items[1]?.category.title}</span>*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*        <div className="w-1/2 p-5 rounded hover:shadow-md">*/}

        {/*          <Image*/}
        {/*              width={643}*/}
        {/*              height={500}*/}
        {/*              src={items[2]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[2]?.images[0].thumbnails.find(th=>th.rendition_id===1).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*          <span className="text-gray-400 text-sm">2 hours ago</span>*/}

        {/*          <Link href={`/${lng}/${items[2]?.category.slug}/${items[2]?.slug}`}>*/}
        {/*            <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">*/}
        {/*              {items[2]?.title}*/}
        {/*            </h2>*/}
        {/*          </Link>*/}

        {/*          <Link href={`/${lng}/${items[2]?.category.slug}`}>*/}
        {/*            <span className="text-gray-400 text-sm">{items[2]?.category.title}</span>*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*        <div className="w-1/2 p-5 rounded hover:shadow-md">*/}

        {/*          <Image*/}
        {/*              width={643}*/}
        {/*              height={500}*/}
        {/*              src={items[3]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[3]?.images[0].thumbnails.find(th=>th.rendition_id===1).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*          <span className="text-gray-400 text-sm">2 hours ago</span>*/}

        {/*          <Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>*/}
        {/*            <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">*/}
        {/*              {items[3]?.title}*/}
        {/*            </h2>*/}
        {/*          </Link>*/}

        {/*          <Link href={`/${lng}/${items[3]?.category.slug}`}>*/}
        {/*            <span className="text-gray-400 text-sm">{items[3]?.category.title}</span>*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*        <div className="w-1/2 p-5 rounded hover:shadow-md">*/}

        {/*          <Image*/}
        {/*              width={643}*/}
        {/*              height={500}*/}
        {/*              src={items[4]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[4]?.images[0].thumbnails.find(th=>th.rendition_id===1).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*          <span className="text-gray-400 text-sm">2 hours ago</span>*/}

        {/*          <Link href={`/${lng}/${items[4]?.category.slug}/${items[4]?.slug}`}>*/}
        {/*            <h2 className="font-bold text-gray-600 text-sm tracking-normal mt-5">*/}
        {/*              {items[4]?.title}*/}
        {/*            </h2>*/}
        {/*          </Link>*/}
        {/*          <Link href={`/${lng}/${items[4]?.category.slug}`}>*/}
        {/*            <span className="text-gray-400 text-sm">{items[4]?.category.title}</span>*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="w-full md:w-1/4">*/}
        {/*      <section className="text-gray-800 text-center md:text-left">*/}


        {/*        <div className="flex flex-wrap mb-6 mx-4 ">*/}
        {/*          <Image*/}
        {/*              width={643}*/}
        {/*              height={500}*/}
        {/*              src={items[5]?.images.length === 1 &&*/}
        {/*                  process.env.NEXT_PUBLIC_BACKEND_URL +*/}
        {/*                  items[5]?.images[0].thumbnails.find(th=>th.rendition_id===3).path*/}
        {/*              }*/}
        {/*              alt={'image'}*/}
        {/*              className="h-50 w-full object-cover rounded-md" />*/}

        {/*          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">*/}

        {/*            <Link href={`/${lng}/${items[5]?.category.slug}/${items[5]?.slug}`}>*/}
        {/*              <h5 className="text-sm font-bold mb-3 text-gray-600">{items[5]?.title}</h5>*/}
        {/*            </Link>*/}
        {/*            <Link href={`/${lng}/${items[5]?.category.slug}`}>*/}
        {/*              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">*/}
        {/*                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">*/}
        {/*                  <path fill="currentColor"*/}
        {/*                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/>*/}
        {/*                </svg>*/}
        {/*                {items[5]?.category.title}*/}
        {/*              </div>*/}
        {/*            </Link>*/}

        {/*            <p className="text-gray-500 mb-6">*/}
        {/*              <small>Published <u>13.01.2022</u> by*/}
        {/*                <a href="" className="text-gray-900">Anna Maria Doe</a></small>*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        <div className="flex flex-wrap mb-6 mx-4">*/}


        {/*          <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 mr-auto">*/}

        {/*            <Link href={`/${lng}/${items[6]?.category.slug}/${items[6]?.slug}`}>*/}
        {/*              <h5 className="text-sm font-bold mb-3 text-gray-600">*/}
        {/*                {items[6]?.title}*/}
        {/*              </h5>*/}
        {/*            </Link>*/}

        {/*            <Link href={`/${lng}/${items[5]?.category.slug}`}>*/}
        {/*              <div*/}
        {/*                  className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">*/}
        {/*                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">*/}
        {/*                  <path fill="currentColor"*/}
        {/*                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/>*/}
        {/*                </svg>*/}
        {/*                {items[6]?.category.title}*/}
        {/*              </div>*/}
        {/*              <p className="text-gray-500 mb-6">*/}
        {/*                <small>Published <u>10.01.2022</u> by*/}
        {/*                  <a href="" className="text-gray-900">Joe Svan</a></small>*/}
        {/*              </p>*/}
        {/*            </Link>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*      </section>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>}



  </div></>
}

const nav = () =>{

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


                  {menuOpen && <>

                    <div className="h-full w-full bg-gray-600">

                    </div>

                  </>}

                </div>
                <div className="hidden sm:ml-6 sm:block lg:ml-6">
                  <div className="flex space-x-4">
                    {categories.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-300 text-gray-500' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-500',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}11
                        </a>
                    ))}
                  </div>
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
        </>
    )}
  </Disclosure>
}