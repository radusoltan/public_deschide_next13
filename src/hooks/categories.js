import axios from "axios";

export const Categories = () => {

  const getPublishedCategories = async () => {
    const categories = await axios.get('/categories')
    return categories
  }

  return {
    getPublishedCategories
  }


}