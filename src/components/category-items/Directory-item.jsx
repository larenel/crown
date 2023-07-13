import './directory-item.styles.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title, route } = category

  const onNavigateHandler = () => navigate(route)

  return (
    <div className="category-cont" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="category-body-cont">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
