import { CategoriesContext } from '../../contexts/categories.context'
import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/Category-preview'
import { Link } from 'react-router-dom'

const CategoriesPriview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}

export default CategoriesPriview
