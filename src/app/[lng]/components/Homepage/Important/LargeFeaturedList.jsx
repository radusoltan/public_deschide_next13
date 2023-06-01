import Image from "next/image";
import React from "react";
import Link from "next/link";

export const LargeFeaturedList = ({articles, lng}) => {

  // console.log(articles[0]?.images[0].thumbnails.find(th=>th.rendition_id===1)?.path)

  return <div className="min-w-screen flex items-center overflow-hidden relative w-full">

    <div
        className="min-w-screen flex items-center overflow-hidden relative">

        <div className="w-full md:w-3/4 ">
          <div className="md:flex relative">
            <div className="w-full md:w-2/3">
              <Image width={600} height={330} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[0]?.images[0].thumbnails.find(th=>th.rendition_id===1)?.path} alt={'image'} className="w-full relative z-10 p-5 rounded-lg"  />
            </div>
            <div className="w-full md:w-1/3">
              <div className="mt-5">
                <Link href={`/${lng}/${articles[0]?.category.slug}`}>
                  <span className="text-red-700 text-md uppercase font-bold">{articles[0]?.category.title}</span>
                </Link>

                <Link href={`/${lng}/${articles[0]?.category.slug}/${articles[0]?.slug}`}>
                  <h1 className="mt-16 font-bold uppercase text-md mb-5 text-gray-600">{articles[0]?.title}</h1>
                  <div className="text-sm text-gray-400">
                    {articles[0]?.lead}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image width={600} height={330} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[1]?.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>

              <Link href={`/${lng}/${articles[1]?.category.slug}/${articles[1]?.slug}`}>
                <h2 className="font-semibold text-gray-800 text-sm tracking-normal mt-5">
                  {articles[1]?.title}11
                </h2>
              </Link>

              <Link href={`/${lng}/${articles[1]?.category.slug}`}>
                <span className="text-gray-400 text-sm">{articles[1]?.category.title}</span>
              </Link>
            </div>
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image width={600} height={330} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[2]?.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>

              <Link href={`/${lng}/${articles[2]?.category.slug}/${articles[2]?.slug}`}>
                <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
                  {articles[2]?.title}
                </h2>
              </Link>

              <Link href={`/${lng}/${articles[2]?.category.slug}`}>
                <span className="text-gray-400 text-sm">{articles[2]?.category.title}</span>
              </Link>
            </div>
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image width={600} height={330} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[3]?.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>

              <Link href={`/${lng}/${articles[3]?.category.slug}/${articles[3]?.slug}`}>
                <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
                  {articles[3]?.title}
                </h2>
              </Link>

              <Link href={`/${lng}/${articles[3]?.category.slug}`}>
                <span className="text-gray-400 text-sm">{articles[3]?.category.title}</span>
              </Link>
            </div>
            <div className="w-1/2 p-5 rounded hover:shadow-md">
              <Image width={600} height={330} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[4]?.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />

              <span className="text-gray-400 text-sm">2 hours ago</span>

              <Link href={`/${lng}/${articles[4]?.category.slug}/${articles[4]?.slug}`}>
                <h2 className="font-bold text-gray-600 text-sm tracking-normal mt-5">
                  {articles[4]?.title}
                </h2>
              </Link>
              <Link href={`/${lng}/${articles[4]?.category.slug}`}>
                <span className="text-gray-400 text-sm">{articles[4]?.category.title}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <section className="text-gray-800 text-left">


            <div className="flex flex-wrap mb-6">
              <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+articles[5]?.images[0].thumbnails.find(th=>th.rendition_id===3).path} alt={'image'} className="h-50 w-full object-cover rounded-xl p-4" />

              <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">

                <Link href={`/${lng}/${articles[5]?.category.slug}/${articles[5]?.slug}`}>
                  <h5 className="text-sm font-bold mb-3 text-gray-600">{articles[5]?.title}</h5>
                </Link>
                <Link href={`/${lng}/${articles[5]?.category.slug}`}>
                  <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path fill="currentColor"
                            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/>
                    </svg>
                    {articles[5]?.category.title}
                  </div>
                </Link>

                <p className="text-gray-500 mb-6">
                  <small>Published <u>13.01.2022</u> by
                    <a href="" className="text-gray-900">Anna Maria Doe</a></small>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap mb-6 ">


              <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 mr-auto">

                <Link href={`/${lng}/${articles[6]?.category.slug}/${articles[6]?.slug}`}>
                  <h5 className="text-sm font-bold mb-3 text-gray-600">
                    {articles[6]?.title}
                  </h5>
                </Link>

                <Link href={`/${lng}/${articles[6]?.category.slug}`}>
                  <div
                      className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path fill="currentColor"
                            d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/>
                    </svg>
                    {articles[6]?.category.title}
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>Published <u>10.01.2022</u> by
                      <a href="" className="text-gray-900">Joe Svan</a></small>
                  </p>
                </Link>
              </div>
            </div>
            {/*<div className="flex flex-wrap mb-6 mx-4">*/}


            {/*  <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 mr-auto">*/}

            {/*    <Link href={`/${lng}/${articles[7]?.category.slug}/${articles[7]?.slug}`}>*/}
            {/*      <h5 className="text-sm font-bold mb-3 text-gray-600">*/}
            {/*        {articles[7]?.title}*/}
            {/*      </h5>*/}
            {/*    </Link>*/}

            {/*    <Link href={`/${lng}/${articles[7]?.category.slug}`}>*/}
            {/*      <div*/}
            {/*          className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">*/}
            {/*        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">*/}
            {/*          <path fill="currentColor"*/}
            {/*                d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/>*/}
            {/*        </svg>*/}
            {/*        {articles[7]?.category.title}*/}
            {/*      </div>*/}
            {/*      <p className="text-gray-500 mb-6">*/}
            {/*        <small>Published <u>10.01.2022</u> by*/}
            {/*          <a href="" className="text-gray-900">Joe Svan</a></small>*/}
            {/*      </p>*/}
            {/*    </Link>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </section>
        </div>
    </div>






  </div>
}