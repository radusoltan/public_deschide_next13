import Image from "next/image";
import React from "react";
import mobileMain from "../../../../../../public/643x500.png";
import Link from "next/link";

export const MediumFeaturedList = ({articles,lng}) =>{

  return <div className="md:grid md:grid-cols-3 gap-2 hidden lg:hidden md:w-full ">
    {articles.map((article,index)=><div
        key={article.id}
        className={index <= 2 ? ` `: `col-span-3 flex mx-5 mb-5`}
        >
      {
        index <= 2 ? <div className="p-5 hover:shadow-md">
          <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md transition ease-in-out duration-700" />

          <span className="text-gray-400 text-sm">2 hours ago</span>

          <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
            <h2 className="font-bold text-gray-800 text-md tracking-normal mt-5">
              {article.title} 11
            </h2>
          </Link>
          <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm">{article.category.title}</span>
          </Link>
        </div> :
        index >= 3 && index <=4 ? <><div className="w-1/4">
          <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md mr-5" />
        </div>
        <div className="w-3/4">
          <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
            <h2 className="font-bold text-gray-700 text-md tracking-normal pl-5">
              {article.title + ` (${index})`}
            </h2></Link>
          <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm pl-5"> {article.category.title}</span></Link>
          <div className="text-sm text-gray-600">{article.lead}</div>
        </div></>
        :<>
        <div className="w-3/4">

          <Link href={`/${lng}/${article.category.slug}/${article.slug}`}>
            <h2 className="font-bold text-gray-700 text-md tracking-normal pl-5">
              {article.title + ` (${index})`}
            </h2></Link>
          <Link href={`/${lng}/${article.category.slug}`}>
            <span className="text-gray-400 text-sm pl-5"> {article.category.title}</span></Link>
          <div className="text-sm text-gray-600">{article.lead}</div>

        </div>
        <div className="w-1/4">
          <Image width={643} height={500} src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(th=>th.rendition_id===1).path} alt={'image'} className="h-50 w-full object-cover rounded-md mr-5" />
        </div>
      </>
      }
      {/*{index <= 1 ? article.title+` (${index})` : article.title}*/}
    </div>)}
  </div>
}