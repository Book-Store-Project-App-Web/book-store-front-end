import { useEffect, useState } from 'react'
import ListBook from './ListBook/ListBook'
import bookAPI from '~/api/bookAPI'
import { toast } from 'react-toastify'

function Home() {
  const [listBooks, setListBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentLimit, setCurrentLimit] = useState(10)
  const [totalRecords, setTotalRecords] = useState(0)

  const fetchAllBook = async () => {
    try {
      const res = await bookAPI.getAllBook(currentPage, currentLimit)
      setListBooks(res.books)
      setTotalRecords(res.totalRows)
    } catch (error) {
      toast.error(error.response.message)
    }
  }
  useEffect(() => {
    fetchAllBook()
  }, [currentPage])

  return (
    <>
      <div className='rounded-lg mb-4 grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <img src='/banner1.webp' alt='Banner' className='w-full h-full object-cover rounded-lg' />
        </div>
        <div className='flex flex-col gap2 h-full justify-between'>
          <img src='/banner2.webp' alt='Banner' className='h-36 object-cover rounded-lg' />
          <img src='/banner3.webp' alt='Banner' className='h-36 object-cover rounded-lg' />
        </div>
      </div>
      <ListBook listBooks={listBooks} setCurrentPage={setCurrentPage} totalRecords={totalRecords} currentLimit={currentLimit} />
    </>
  )
}

export default Home
