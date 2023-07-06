import CategoryItem from '../category-items/Category-item'
import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-cont">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
