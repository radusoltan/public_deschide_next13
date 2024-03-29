"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../../../../public/fff.png"
import importantMainImage from "../../../../../../public/600x330.png"
import squareImage from "../../../../../../public/600x600.png"
import imageMain from "../../../../../../public/600x330.png";
import mobileMain from "../../../../../../public/643x500.png"
export const Important = ({articles, lng})=>{




  const numItems = articles.length

  const [items, setItems] = useState([])

  useEffect(() => {
    // Create an initial array of items

    const initialItems = [];
    for (let i = 1; i <= numItems; i++) {

      if (articles[i]){

        const translated = articles[i]
        const category = articles[i].category
        initialItems.push({
          ...translated,
          category
        });
      }
    }
    setItems(initialItems);
    // Change the order of the items every second
    const intervalId = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const randomIndex = Math.floor(Math.random() * newItems.length);
        const itemToMove = newItems.splice(randomIndex, 1)[0];
        const newIndex = Math.floor(Math.random() * newItems.length);
        newItems.splice(newIndex, 0, itemToMove);
        return newItems;
      });
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, [numItems]);
  // console.log(items)

  return <section className=" ">
    <div
        className="min-w-screen flex overflow-hidden relative">

      <div className="w-full md:hidden">
        <div className="flex ">
          <div className="w-1/2 p-5 rounded hover:shadow-md">
            <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>
            <Link href={`/${lng}/${items[0]?.category.slug}/${items[0]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[0]?.title}
            </h2>
            </Link>
            <Link href={`/${lng}/${items[0]?.category.slug}`}>
            <span className="text-gray-400 text-sm">
              {items[0]?.category.title}
            </span></Link>
          </div>
          <div className="w-1/2 p-5 rounded hover:shadow-md">
            <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>
            <Link href={`/${lng}/${items[1]?.category.slug}/${items[1]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[1]?.title}
            </h2></Link>
              <Link href={`/${lng}/${items[1]?.category.slug}`}>
                <span className="text-gray-400 text-sm">
                  {items[1]?.category.title}
                </span></Link>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-between p-5 hover:shadow-md">
          <div className="w-1/4">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4">

            <Link href={`/${lng}/${items[2]?.category.slug}/${items[2]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal">
              {items[2]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[2]?.category.slug}`}>
              <span className="text-gray-400 text-sm"> {items[2]?.category.title}</span></Link>
          </div>

        </div>
        <div className="w-full flex gap-4 justify-between p-5 hover:shadow-md">
          <div className="w-1/4">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4">
            <Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal">
              {items[3]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[3]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[3]?.category.title}</span></Link>
          </div>

        </div>
        <div className="w-full flex gap-4 justify-between p-5 hover:shadow-md">
          <div className="w-1/4">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />
          </div>
          <div className="w-3/4">
            <Link href={`/${lng}/${items[4]?.category.slug}/${items[4]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal">
              {items[4]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[3]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[4]?.category.title}</span></Link>
          </div>

        </div>
        <div className="flex ">
          <div className="w-1/3 p-5 rounded hover:shadow-md">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[5]?.category.slug}/${items[5]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[5]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[5]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[5]?.category.title}</span></Link>
          </div>
          <div className="w-1/3 p-5 rounded hover:shadow-md">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[6]?.category.slug}/${items[6]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[6]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[6]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[6]?.category.title}</span></Link>
          </div>
          <div className="w-1/3 p-5 rounded hover:shadow-md">
            <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[7]?.category.slug}/${items[7]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[7]?.title}
            </h2></Link>
            <Link href={`/${lng}/${items[6]?.category.slug}`}>
              <span className="text-gray-400 text-sm">{items[7]?.category.title}</span></Link>
          </div>
        </div>
      </div>

      <div className="md:flex hidden md:w-full items-center justify-between lg:hidden">
        <div className="w-3/4 flex items-center justify-between">
          <div className="w-1/2 p-5 rounded hover:shadow-md">
            <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[0]?.category.slug}/${items[0]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[0]?.title} 11
            </h2>
            </Link>
            <Link href={`/${lng}/${items[0]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[0]?.category.title}</span>
            </Link>
          </div>
          <div className="w-1/2 p-5 rounded hover:shadow-md">
            <Image src={mobileMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            <Link href={`/${lng}/${items[1]?.category.slug}/${items[1]?.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {items[1]?.title}
            </h2>
            </Link>
            <Link href={`/${lng}/${items[1]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[1]?.category.title}</span>
            </Link>
          </div>


        </div>
        <div className="w-1/4">
          <div className="mb-5">

            <Link href={`/${lng}/${items[2]?.category.slug}/${items[2]?.slug}`}>
            <h2 className="font-semibold text-gray-600 text-sm">{items[2]?.title}</h2>
            </Link>
            <Link href={`/${lng}/${items[2]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[2]?.category.title}</span>
            </Link>
          </div>
          <div className="mb-5">

            <Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>
            <h2 className="font-semibold text-gray-600 text-sm">{items[3]?.title}</h2>
            </Link>

            <Link href={`/${lng}/${items[3]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[3]?.category.title}</span>
            </Link>
          </div>
          <div className="mb-5">

            <Link href={`/${lng}/${items[4]?.category.slug}/${items[4]?.slug}`}>
            <h2 className="font-semibold text-gray-600 text-sm">{items[4]?.title}</h2>
            </Link>

            <Link href={`/${lng}/${items[4]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[4]?.category.title}</span>
            </Link>
          </div>
          <div className="mb-5">
            <Link href={`/${lng}/${items[5]?.category.slug}/${items[5]?.slug}`}>
            <h2 className="font-semibold text-gray-600 text-sm">{items[5]?.title}</h2>
            </Link>
            <Link href={`/${lng}/${items[5]?.category.slug}`}>
            <span className="text-gray-400 text-sm">{items[5]?.category.title}</span>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:flex hidden w-full bg-amber-900">
        <div
            className="min-w-screen flex items-center overflow-hidden relative">
          <div
              className="w-full rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left md:flex"
          >
            <div className="w-full md:w-3/4 ">
              <div className="md:flex relative">
                <div className="w-full md:w-2/3 md:mb-0">
                  <Image src={importantMainImage} className="w-full relative z-10 p-5 rounded-lg" alt="" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="mt-5">
                    <Link href={`/${lng}/${items[0]?.category.slug}`}>
                    <span className="text-red-700 text-md uppercase font-bold">{items[0]?.category.title}</span>
                    </Link>

                    <Link href={`/${lng}/${items[0]?.category.slug}/${items[0]?.slug}`}>
                    <h1 className="mt-16 font-bold uppercase text-md mb-5 text-gray-600">{items[0]?.title}</h1>
                    <div className="text-sm text-gray-400">
                      {items[0]?.lead}
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:flex">
                <div className="w-1/2 p-5 rounded hover:shadow-md">
                  <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

                  <span className="text-gray-400 text-sm">2 hours ago</span>

                  <Link href={`/${lng}/${items[1]?.category.slug}/${items[1]?.slug}`}>
                  <h2 className="font-semibold text-gray-800 text-sm tracking-normal mt-5">
                    {items[1]?.title}11
                  </h2>
                  </Link>

                  <Link href={`/${lng}/${items[1]?.category.slug}`}>
                  <span className="text-gray-400 text-sm">{items[1]?.category.title}</span>
                  </Link>
                </div>
                <div className="w-1/2 p-5 rounded hover:shadow-md">
                  <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

                  <span className="text-gray-400 text-sm">2 hours ago</span>

                  <Link href={`/${lng}/${items[2]?.category.slug}/${items[2]?.slug}`}>
                  <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
                    {items[2]?.title}
                  </h2>
                  </Link>

                  <Link href={`/${lng}/${items[2]?.category.slug}`}>
                  <span className="text-gray-400 text-sm">{items[2]?.category.title}</span>
                  </Link>
                </div>
                <div className="w-1/2 p-5 rounded hover:shadow-md">
                  <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

                  <span className="text-gray-400 text-sm">2 hours ago</span>

                  <Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>
                  <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
                    {items[3]?.title}
                  </h2>
                  </Link>

                  <Link href={`/${lng}/${items[3]?.category.slug}`}>
                  <span className="text-gray-400 text-sm">{items[3]?.category.title}</span>
                  </Link>
                </div>
                <div className="w-1/2 p-5 rounded hover:shadow-md">
                  <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

                  <span className="text-gray-400 text-sm">2 hours ago</span>

                  <Link href={`/${lng}/${items[4]?.category.slug}/${items[4]?.slug}`}>
                  <h2 className="font-bold text-gray-600 text-sm tracking-normal mt-5">
                    {items[4]?.title}
                  </h2>
                  </Link>
                  <Link href={`/${lng}/${items[4]?.category.slug}`}>
                    <span className="text-gray-400 text-sm">{items[4]?.category.title}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <section className="text-gray-800 text-center md:text-left">


                <div className="flex flex-wrap mb-6 mx-4 ">
                  <Image src={mobileMain} alt={"square"} className="rounded p-4" />

                  <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">

                    <Link href={`/${lng}/${items[5]?.category.slug}/${items[5]?.slug}`}>
                      <h5 className="text-sm font-bold mb-3 text-gray-600">{items[5]?.title}</h5>
                    </Link>
                    <Link href={`/${lng}/${items[5]?.category.slug}`}>
                    <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="currentColor"
                              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/>
                      </svg>
                      {items[5]?.category.title}
                    </div>
                    </Link>

                    <p className="text-gray-500 mb-6">
                      <small>Published <u>13.01.2022</u> by
                        <a href="" className="text-gray-900">Anna Maria Doe</a></small>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap mb-6 mx-4">


                  <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 mr-auto">

                    <Link href={`/${lng}/${items[6]?.category.slug}/${items[6]?.slug}`}>
                    <h5 className="text-sm font-bold mb-3 text-gray-600">
                      {items[6]?.title}
                    </h5>
                    </Link>

                    <Link href={`/${lng}/${items[5]?.category.slug}`}>
                    <div
                        className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor"
                              d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/>
                      </svg>
                      {items[6]?.category.title}
                    </div>
                    <p className="text-gray-500 mb-6">
                      <small>Published <u>10.01.2022</u> by
                        <a href="" className="text-gray-900">Joe Svan</a></small>
                    </p>
                    </Link>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>
      </div>





    </div>
  </section>
}