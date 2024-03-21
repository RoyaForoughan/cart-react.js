import { useProductDetails } from "../context/ProductContext"
import {Link, useParams} from 'react-router-dom'
 import Loader from '../components/Loader'
 import { SiOpenproject } from "react-icons/si";
 import { IoMdPricetags } from "react-icons/io";
 import { FaArrowLeft } from "react-icons/fa";
 import styles from './DetailsPage.module.css'
function DetailsPage() {

  const {id} = useParams()
  const productDetails = useProductDetails(+id)
  

  if(!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
      <h3 className={styles.title}>{productDetails.title}</h3>
      <p className={styles.description}>{productDetails.description}</p>
      <SiOpenproject />
      <p className={styles.category}>{productDetails.category}</p>
      <div>
        <span className={styles.price}>
      <IoMdPricetags />
          {productDetails.price}
        </span>
        <Link to='/products'>
      <FaArrowLeft />
          <span>Back to shop</span>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default DetailsPage