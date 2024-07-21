import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Cart() {
  return (
    <>
      <div className='mr-4'>
        <button className='flex flex-col items-center  text-gray-500'>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className='text-sm'>Giỏ hàng</span>
        </button>
      </div>
    </>
  )
}

export default Cart
