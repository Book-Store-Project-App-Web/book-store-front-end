import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className='mr-4'>
        <NavLink to='/my-cart' className='flex flex-col items-center  text-gray-500'>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className='text-sm'>Giỏ hàng</span>
        </NavLink>
      </div>
    </>
  )
}

export default Cart
