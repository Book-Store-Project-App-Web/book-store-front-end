import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Badge, Rate, Pagination } from 'antd'
import { NavLink } from 'react-router-dom'

function ListBook({ listBooks, setCurrentPage, totalRecords, currentLimit }) {
  const handleChangePage = (e) => {
    setCurrentPage(e)
  }
  return (
    <>
      <div className=''>
        <p className='p-4 text-lg font-medium rounded-t-lg bg-pink-200'>
          <FontAwesomeIcon icon={faList} className='mr-2 text-red-600' /> Tất cả sản phẩm
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-white p-4 rounded-l-lg'>
          {listBooks &&
            listBooks.map((book) => {
              return (
                <>
                  <NavLink to={`/chi-tiet-sach/${book.slug}/${book.id}`} className='rounded-lg hover:shadow-md'>
                    <Badge.Ribbon text={`-${book.discount}%`} color='red'>
                      <div className='p-4'>
                        <div>
                          <img src={book.image} alt='Product' className='w-full h-48 object-cover rounded-lg mb-4' />
                        </div>
                        <div>
                          <p className='text-sm text-gray-700 h-12 py-2  line-clamp-2 '>{book.name}</p>

                          <div className='h-10 my-2'>
                            <span className='text-red-600 font-medium text-xl'>
                              {((book.price * (100 - book.discount)) / 100).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                            </span>
                            <p className='text-gray-400 line-through text-sm'>{book.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                          </div>
                          <div className='flex justify-between items-center'>
                            <div>
                              <Rate allowHalf defaultValue={book.ratingsAverage} disabled className='text-sm' />
                              <span className='text-gray-400 ml-2'>({book.ratingsAverage})</span>
                            </div>
                            <p className='text-gray-400 text-xs'>
                              Đã bán: <span className='text-gray-600'>{book.sold || 0}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Badge.Ribbon>
                  </NavLink>
                </>
              )
            })}
        </div>
        <div className='bg-white rounded-b-lg p-2'>
          <Pagination align='end' total={totalRecords} pageSize={currentLimit} onChange={handleChangePage} />
        </div>
      </div>
    </>
  )
}

export default ListBook
