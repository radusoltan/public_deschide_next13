"use client"
import { useState, useRef, useEffect } from 'react'
import imageMain from "./../../../../../public/600x330.png"
import Image from "next/image"


export const ArticleCarousel = ({articles}) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {

    const elementsToShow = 5

    // console.log()



    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {

    maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
  }, []);

  // console.log(maxScrollWidth)

  // return <div className="flex h-70">
  //
  //     <div className='w-1/24 flex items-center'>
  //       <div className="w-full text-right">
  //         <button
  //           disabled={isDisabled("prev")}
  //           onClick={movePrev}
  //           className="p-3 rounded-full bg-white border border-gray-100 shadow-lg">
  //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
  //                stroke="currentColor" className="w-6 h-6">
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
  //           </svg>
  //
  //
  //         </button>
  //       </div>
  //     </div>
  //
  //
  //     <div className='w-10/22 overflow-hidden' ref={carousel}>
  //       <div className="flex w-full">
  //
  //         <div className="w-1/5 py-5">
  //           <div className="border rounded-lg p-5">
  //             <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />
  //             <span className="text-gray-400 text-sm">2 hours ago</span>
  //             <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>
  //             <span className="text-gray-400">Category</span>
  //
  //           </div>
  //         </div>
  //
  //         <div className="w-1/5 py-5">
  //           <div className="border rounded-lg p-5">
  //             <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />
  //             <span className="text-gray-400 text-sm">2 hours ago</span>
  //             <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>
  //
  //           </div>
  //         </div>
  //
  //         <div className="w-1/5 py-5">
  //           <div className="border rounded-lg p-5">
  //             <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />
  //             <span className="text-gray-400 text-sm">2 hours ago</span>
  //             <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>
  //
  //           </div>
  //         </div>
  //
  //         <div className="w-1/5 py-5">
  //           <div className="border rounded-lg p-5">
  //             <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />
  //             <span className="text-gray-400 text-sm">2 hours ago</span>
  //             <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>
  //
  //           </div>
  //         </div>
  //
  //         <div className="w-1/5 py-5">
  //           <div className="border rounded-lg p-5">
  //             <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />
  //             <span className="text-gray-400 text-sm">2 hours ago</span>
  //             <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>
  //
  //           </div>
  //         </div>
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //         {/*<div className="w-1/5 py-5">*/}
  //         {/*  <div className="border rounded-lg p-5">*/}
  //         {/*    <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*    <span className="text-gray-400 text-sm">2 hours ago</span>*/}
  //         {/*    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">My Amaizing Journey to the Mountains.</h2>*/}
  //
  //         {/*  </div>*/}
  //         {/*</div>*/}
  //
  //
  //
  //         {/*{articles.map(({title},index)=>{*/}
  //         {/*  return (<div className="carousel-item w-full p-5" key={index}>*/}
  //         {/*    <div className="border rounded-lg p-5">*/}
  //         {/*      <Image src={imageMain} alt='image' className="h-50 w-full object-cover rounded-md" />*/}
  //         {/*      <h2 className="font-bold text-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>*/}
  //         {/*      <p className="text-sm text-gray-700 px-2 mr-1">*/}
  //         {/*        Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
  //         {/*      </p>*/}
  //         {/*      <div className="flex items-center justify-between mt-2 mx-6">*/}
  //         {/*        <a href="#" className="text-blue-500 text-xs -ml-3 ">Show More</a>*/}
  //         {/*        <a href="#" className="flex text-gray-700">*/}
  //         {/*          <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">*/}
  //         {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
  //         {/*                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>*/}
  //         {/*          </svg>*/}
  //         {/*          5*/}
  //         {/*        </a>*/}
  //         {/*      </div>*/}
  //         {/*      <div className="author flex items-center ">*/}
  //         {/*        <div className="user-logo">*/}
  //
  //         {/*        </div>*/}
  //         {/*        <h2 className="text-sm tracking-tighter text-gray-900">*/}
  //         {/*          <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>*/}
  //         {/*        </h2>*/}
  //         {/*      </div>*/}
  //         {/*    </div>*/}
  //         {/*  </div>)*/}
  //         {/*})}*/}
  //       </div>
  //     </div>
  //
  //
  //     <div className='w-1/32 flex items-center'>
  //       <button
  //         onClick={moveNext}
  //         disabled={isDisabled('next')}
  //         className="p-3 rounded-full bg-white border border-gray-100 shadow-lg">
  //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
  //              stroke="currentColor" className="w-6 h-6">
  //           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
  //         </svg>
  //
  //
  //       </button>
  //     </div>
  //   </div>

  return <div className="carousel ">
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top left w-full h-full">
        <button
            onClick={movePrev}
            className="hover:bg-gray-400/75 hover:text-white text-gray-400 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
        <button
            onClick={moveNext}
            className="hover:bg-gray-400/75 hover:text-white text-gray-400 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div
          ref={carousel}
          className="carousel-container ml-10 relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {articles.map((resource, index) => {
          return (
              <div
                  key={index}
                  className="carousel-item text-left relative h-90 snap-start"
              >
                <div className="w-80 py-5 mr-5">
                  <div className="p-5">
                    <Image src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md" />

                    <span className="text-gray-400 text-sm">2 hours ago</span>
                    <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">
                      {resource.title}
                    </h2>
                    <span className="text-gray-400">Category</span>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  </div>
}