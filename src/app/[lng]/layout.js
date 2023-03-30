import { dir } from 'i18next'
import '../globals.scss'
import "node_modules/flag-icons/css/flag-icons.min.css";
import axios from "@/lib/axios";
import {Header} from "@/app/[lng]/components/Header";
import {Footer} from "@/app/[lng]/components/Foot";


export default async function RootLayout({
  children,
  params: {
    lng
  }
}) {

  // const categories = await axios.get('api/public/home?locale=ro')
  const categories = await axios.get(`api/public/categories?locale=${lng}`)

  // console.log(categories.data)

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className="2xl:mx-60 lg:mx-10 sm:m-0">
      <Header categories={categories.data} lang={lng} />
      {children}

      <Footer />

      </body>
    </html>
  )
}