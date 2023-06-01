"use client"
import React, {useEffect, useState} from "react"
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import mobileMain from "../../../../../../public/643x500.png"
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {MobileFeaturedList} from "@/app/[lng]/components/Homepage/Important/Mobile";
import {MediumFeaturedList} from "@/app/[lng]/components/Homepage/Important/Medium";
import {LargeFeaturedList} from "@/app/[lng]/components/Homepage/Important/LargeFeaturedList";
import {Important} from "@/app/[lng]/components/Homepage/Important/Important";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.5 }
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const FeaturedArticlesList = ({articles, lng}) => {
  const [items, setItems] = useState([])
  const numItems = articles.length

  useEffect(() => {


    const initialItems = [];

    articles.map(article=>{

      initialItems.push({
        ...article.translations.find(trans=>trans.locale===lng),
        category: article.category.translations.find(trans=>trans.locale===lng),
        images: article.images
      })

    })

    setItems(initialItems)


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


    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    }

  }, [numItems]);

  console.log(items)


  return <section className="min-w-screen relative">
    <MobileFeaturedList articles={items} lng={lng} />
    <MediumFeaturedList articles={items} lng={lng} />
    <LargeFeaturedList articles={items} lng={lng} />
  </section>
}