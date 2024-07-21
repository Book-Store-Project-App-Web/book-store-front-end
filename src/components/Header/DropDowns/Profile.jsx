import { faUser, faRectangleList, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightFromBracket, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import { Dropdown } from 'antd'

function Profile() {
  const items = [
    {
      key: '1',
      label: (
        <a className='flex justify-center items-center p-1'>
          <FontAwesomeIcon icon={faRectangleList} className='text-gray-500' />
          <span className='flex-1 ml-2 text-gray-500'>Đơn hàng của tôi</span>
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a className='flex justify-center items-center p-1'>
          <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
          <span className='flex-1 ml-2 text-gray-500'>Sản phẩm yêu thích</span>
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a className='flex justify-center items-center p-1'>
          <FontAwesomeIcon icon={faTicket} className='text-gray-500' />
          <span className='flex-1 ml-2 text-gray-500'>Wallet Voucher</span>
        </a>
      )
    },
    {
      key: '4',
      label: (
        <a className='border-t-2 border-gray-200 flex justify-center items-center p-1'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-gray-500' />
          <span className=' flex-1 ml-2 text-gray-500'>Đăng xuất</span>
        </a>
      )
    },
    {
      key: '5',
      label: (
        <NavLink className='border-t-2 border-gray-200 flex justify-center items-center p-1' to='/login'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-gray-500' />
          <span className=' flex-1 ml-2 text-gray-500'>Đăng Nhập</span>
        </NavLink>
      )
    }
  ]

  return (
    <>
      <Dropdown
        menu={{
          items
        }}
        placement='bottomRight'
        trigger={['click']}
      >
        <div className='mr-4'>
          <button className='flex flex-col items-center text-gray-500'>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className='text-sm'>Tài khoản</span>
          </button>
        </div>
      </Dropdown>
    </>
  )
}

export default Profile
