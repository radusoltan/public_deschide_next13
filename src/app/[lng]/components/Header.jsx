import {Navigation} from "@/app/[lng]/components/Navigation";
import {useTranslation} from "./../../i18n";

export const Header = async ({categories, lang})=>{

  // console.log(categories)

  return <header className=''>

    <Navigation items={categories} lang={lang} />


  </header>
}