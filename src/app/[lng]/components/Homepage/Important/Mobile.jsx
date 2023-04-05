import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MobileFeaturedList = ({articles, lng})=>{

  return <div className="grid grid-cols-2 md:hidden">
    {articles.map((article, index) => <div
      key={index}
      className={
      index===0 ?'':
      index >= 2 && index < 6 ? 'col-span-2 flex items-center p-5 rounded hover:shadow-md': ''}>
      {index >= 2 && index < 6 ? <>
        <div className="w-1/4">
          <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===3).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />
        </div>
        <div className="w-3/4">
          <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal pl-5">
              {article.title}
            </h2></Link>
          <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm pl-5"> {article.category.title}</span></Link>
        </div>

      </>:
      index >= 5 ? <>
        <div className="p-5 rounded hover:shadow-md">
          <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===3).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />
          <span className="text-gray-400 text-sm">2 hours ago</span>
          <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {article.title}
            </h2>
          </Link>
          <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm">
              {article.category.title}
            </span></Link>
        </div>
      </>  : <><div className="p-5 rounded hover:shadow-md">
        <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===3).path} alt={'image'} className="h-50 w-full object-cover rounded-md" />
        <span className="text-gray-400 text-sm">2 hours ago</span>
        <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
          <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
            {article.title}
          </h2>
        </Link>
        <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm">
              {article.category.title}
            </span></Link>
      </div></>}
    </div>)}
  </div>
}