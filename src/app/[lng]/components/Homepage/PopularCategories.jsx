import {ArticleCarousel} from "@/app/[lng]/components/Homepage/ArticleCarousel";

export const PopularCategories = ({articles}) => {

  return <>
    <section className="bg-gray-200">
      <h1 className="text-gray-800 text-2xl ml-10 pt-10 pl-5">Last News</h1>

      <ArticleCarousel articles={articles} />
    </section>
    <section className="bg-white h-90">
      <h1 className="text-gray-800 text-2xl ml-10 pt-10 pl-5">popular News</h1>
      <ArticleCarousel articles={articles} />
    </section>
  </>

}