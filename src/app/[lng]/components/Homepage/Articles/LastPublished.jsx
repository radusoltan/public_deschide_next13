'use client'
import axios from "@/lib/axios";
import Pagination from "react-js-pagination";
import {useEffect, useState} from "react";
import Image from "next/image";
import image from './../../../../../../public/330x382.png'
import imageMain from "../../../../../../public/600x330.png";
import Link from "next/link";

const getLastArticles = async ({lng, page=1})=> {

  return await axios.get(`published-articles?locale=${lng}&page=${page}`)

}

export const LastPublishedArticles = ({lng}) => {

  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});


  useEffect(() => {

    async function fetchData() {
      try {
        const response = await getLastArticles({lng})
        setArticles(response.data.data)
        setPagination(response.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

  }, [])

  return <section className="">
    <h1>LAST PUBLISHED</h1>
    <div className="scrollbar overflow-y-auto h-[600px] overflow-y-scroll md:hidden">
    {articles.map((article, index)=>(<div key={index} className="flex m-2 hover:shadow-lg">
      <div className="w-1/3">
        <Image
            className="rounded-md"
            width={article.images[0].thumbnails.find(th=>th.rendition_id===3).width}
            height={article.images[0].thumbnails.find(th=>th.rendition_id===3).height}
            src={process.env.NEXT_PUBLIC_BACKEND_URL + article.images[0].thumbnails.find(th=>th.rendition_id===3).path} alt={article.title} />
      </div>
      <div className="w-2/3 ml-2">
        <h2 className="text-gray-700 font-bold text-md">{article.title}</h2>
        <span className="mt-5 text-sm text-gray-500">{article.category.title}</span>
      </div>

    </div>))}

    </div>
    <div className="md:flex xm:hidden ">

      <div className="w-8/24">
        <div className=" mt-5 md:h-[600px] scrollbar overflow-y-auto overflow-y-scroll">

          {articles.map((article, index)=>(<div key={index} className="flex m-2 hover:shadow-lg">

            <div className="mx-2 mb-5">
              <h2 className="text-gray-700 font-bold text-md">{article.translations.find(t=>t.locale===lng).title}</h2>
              <span className="mt-5 text-sm text-gray-500">Published At: <i>2 feb 2023</i></span>
              {/*<span className="text-sm w-full"></span>*/}
            </div>

          </div>))}

        </div>

        <Link href={lng + '/all'}><button className="p-5 bg-amber-300 rounded-md">ALL</button></Link>

      </div>
      <div className="w-16/24 ml-5 mt-5 flex">


        <div className="w-1/2">
          <Image src={image} alt={'image'} className="rounded-md" />
          {/*<Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>*/}
          <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
            {articles[3]?.title}
          </h2>
          {/*</Link>*/}

          {/*<Link href={`/${lng}/${items[3]?.category.slug}`}>*/}
          <span className="text-gray-400 text-sm">{articles[3]?.category.title}</span>
          {/*</Link>*/}
        </div>
        <div className="w-1/2 ml-5 md:mr-5">
          <div className="mb-7">
            <Image
                width={600}
                height={330}
                src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md mr-2"
            />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            {/*<Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>*/}
            <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
              {articles[3]?.title}
            </h2>
            {/*</Link>*/}

            {/*<Link href={`/${lng}/${items[3]?.category.slug}`}>*/}
            <span className="text-gray-400 text-sm">{articles[3]?.category.title}</span>
            {/*</Link>*/}
          </div>
          <div className="mb-7">
            <Image
                width={600}
                height={330}
                src={imageMain} alt={'image'} className="h-50 w-full object-cover rounded-md mr-2"
            />

            <span className="text-gray-400 text-sm">2 hours ago</span>

            {/*<Link href={`/${lng}/${items[3]?.category.slug}/${items[3]?.slug}`}>*/}
            <h2 className="font-bold text-gray-600 text-md tracking-normal mt-5">
              {articles[3]?.title}
            </h2>
            {/*</Link>*/}

            {/*<Link href={`/${lng}/${items[3]?.category.slug}`}>*/}
            <span className="text-gray-400 text-sm">{articles[3]?.category.title}</span>
            {/*</Link>*/}
          </div>
        </div>



      </div>

    </div>

  </section>


  // return <section className="bg-amber-300">
  //   <h1>LAST PUBLISHED</h1>
  //   <div className="flex">
  //     <div className="sm:w-1/2 md:w-1/3 xm:w-full">
  //       {articles.map((article,index)=>(<div key={article.id} className={`m-5 w-full flex`}>
  //         <div className={`w-1/3`}>
  //           <Image
  //               width={article.images[0]?.thumbnails.find(({rendition_id})=>rendition_id===3).width}
  //               height={article.images[0]?.thumbnails.find(({rendition_id})=>rendition_id===3).height}
  //               src={process.env.NEXT_PUBLIC_BACKEND_URL + article.images[0]?.thumbnails.find(({rendition_id})=>rendition_id===3).path} alt={article.title} />
  //         </div>
  //         {article.title + ` (${index})`}
  //       </div>))}
  //       <div className="flex justify-center">
  //       <nav aria-label="Page navigation example">
  //         <Pagination
  //             activePage={paginated.current_page}
  //             itemsCountPerPage={paginated.per_page}
  //             totalItemsCount={paginated.total}
  //             pageRangeDisplayed={5}
  //             prevPageText={<span
  //                 className="pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
  //             >Previous</span>}
  //             nextPageText={<span
  //                 className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
  //                 href="#!"
  //             >Next</span>}
  //             linkClass={'relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}
  //             innerClass={'list-style-none flex'}
  //             onChange={()=>{
  //               console.log('change')
  //             }}
  //         />
  //       </nav>
  //     </div>
  //     </div>
  //   </div>
  //
  //
  //
  // </section>
}