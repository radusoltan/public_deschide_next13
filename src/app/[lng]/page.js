// 'use client'
import {useTranslation} from "@/app/i18n"
import axios from "@/lib/axios";
import {PopularCategories} from "@/app/[lng]/components/Homepage/PopularCategories";
import {
  FeaturedArticlesList
} from "@/app/[lng]/components/Homepage/Important/FeaturedArticlesList";
import {LastPublishedArticles} from "@/app/[lng]/components/Homepage/Articles/LastPublished";


const getLastArticles = async ({lng, page=1})=> {

  return await axios.get(`published-articles?locale=${lng}&page=${page}`)

}

const getImportantArticles = async ({lng})=> {
  return await axios.get(`api/public/important-articles?locale=${lng}`)
}

const getCategories = async ({lng})=> {
  return await axios.get(`api/public/categories?locale=${lng}`)
}

export default async function Page({ params: { lng } }) {
  // const { t } = await useTranslation(lng)
  //
  // const isBreaking = true
  //
  const lastArticles = await getLastArticles(lng)
  //
  const importantArticles = await getImportantArticles(lng)

  return (
    <>

      <FeaturedArticlesList articles={importantArticles.data} lng={lng}/>

      <LastPublishedArticles lng={lng} />

      <PopularCategories articles={lastArticles.data.data} lng={lng} />

    </>
  )
}