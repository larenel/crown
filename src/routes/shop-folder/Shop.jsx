import CategoriesPriview from '../../routes/categories-preview/Categories-preview'

import { Routes, Route } from 'react-router-dom'
import Categoty from '../category/category'

import './shop.styles.scss'
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPriview />}></Route>
      <Route path=":category" element={<Categoty />}></Route>
    </Routes>
  )
}

export default Shop
