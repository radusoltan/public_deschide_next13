
import {ArticlesSlider} from "@/app/[lng]/components/Homepage/ArticlesSlider";

export const PopularCategories = ({articles, lng}) => {

  return <>
    <section className="bg-gray-200 py-7">
      <h1 className="text-gray-800 text-2xl ml-10 pt-5 pl-5">Last News</h1>

      <ArticlesSlider articles={articles} lng={lng} />
    </section>
    <section className="bg-white py-7">
      <h1 className="text-gray-800 text-2xl ml-10 pt-10 pl-5">popular News</h1>
      <ArticlesSlider articles={articles} lng={lng} />
    </section>
  </>

}