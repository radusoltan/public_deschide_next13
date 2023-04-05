"use client"
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import imageMain from "../../../../../public/600x330.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  className: 'flex items-center mx-7',
  slidesToShow: 5, // show 2 items on small screens
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  // dotsClass: 'radu',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3, // show 3 items on medium screens
        slidesToScroll: 2
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5, // show 5 items on large screens
        slidesToScroll: 4
      },

    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ],
};

export const ArticlesSlider = ({articles, lng}) => {


  const articleList = articles?.map((article, index) => {
    return <div
        key={index}
        className="carousel-item text-left relative snap-start"
    >
      <div className="">
        <div className="p-5">
          <Image
              src={process.env.NEXT_PUBLIC_BACKEND_URL + article.images[0].thumbnails.find(th=>th.rendition_id===1).path}
              width={article.images[0].thumbnails.find(th=>th.rendition_id===1).width}
              height={article.images[0].thumbnails.find(th=>th.rendition_id===1).height}
              alt={article.title}
              className="h-50 w-full object-cover rounded-md" />

          <span className="text-gray-400 text-sm">2 hours ago</span>
          <h2 className="font-bold text-gray-800 text-sm tracking-normal mt-5">
            {article.translations.find(t=>t.locale===lng)?.title}
          </h2>
          <span className="text-gray-400">{article.category.title}</span>
        </div>
      </div>
    </div>
  })


  return  <Slider {...settings}>

    {articleList}
  </Slider>
}