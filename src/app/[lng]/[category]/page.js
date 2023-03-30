import {Header} from "@/app/[lng]/components/Header";
import axios from "@/lib/axios";
const getCategories = async ()=> {
  return await axios.get('api/public/category/political?locale=en')
}

export default async function ({ params: { lng } }){
  const category = await getCategories()

  console.log(category)

  return <>
    {/*<Header categories={categories.data} lang={lng} />*/}
    <h1>Category ({lng})</h1>
  </>
}