import BasketCard from "../components/BasketCard"
import BasketSidebar from "../components/BasketSidebar"
import { useCart } from "../context/CartContext"
import styles from './CheckoutPage.module.css'

function CheckoutPage() {
  const [state , dispatch] = useCart()
   

  const clickHandler = (type , payload) => dispatch({type , payload})
  
  if(!state.itemCounter){
    return (
      <div className={styles.container}>
        <img src="../../public/online-shopping-4236450_1920.jpg" alt="Empty basket" width={1100} height={1000} />
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}/>
     <div className={styles.products}>
      {state.selectItems.map(product => (
        <BasketCard  key={product.id} data={product} clickHandler={clickHandler}/>
      ))}
      
     </div>
    </div>
  )
}

export default CheckoutPage