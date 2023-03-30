
import {useTranslation} from "@/app/i18n"
import axios from "@/lib/axios";
import {Important} from "@/app/[lng]/components/Homepage/Important/Important";
import {Header} from "@/app/[lng]/components/Header";
import {PopularCategories} from "@/app/[lng]/components/Homepage/PopularCategories";
import {SpecialArticles} from "@/app/[lng]/components/Homepage/SpecialArticles";
import Image from "next/image";
import newImage from "./../../../public/330x382.png"
import imageMain from "../../../public/600x330.png";
import {ArticleCarousel} from "@/app/[lng]/components/Homepage/ArticleCarousel";
import {LastNews} from "@/app/[lng]/components/Homepage/LastNews";
import ScrollableList from "@/app/[lng]/components/ScrollableList";

const getLastArticles = async ({lng})=> {

  return await axios.get('api/public/articles')

}

const getImportantArticles = async ({lng})=> {
  return await axios.get(`api/public/important-articles?locale=${lng}`)
}

const getCategories = async ({lng})=> {
  return await axios.get(`api/public/categories?locale=${lng}`)
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  const isBreaking = true

  const lastArticles = await getLastArticles(lng)

  const importantArticles = await getImportantArticles(lng)

  return (
    <>
      <Important articles={importantArticles.data} lng={lng} />


      <PopularCategories articles={lastArticles.data} />

    </>
  )
}