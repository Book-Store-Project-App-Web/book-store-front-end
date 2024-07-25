import { useEffect, useState } from 'react'
import ListBook from './ListBook/ListBook'
import bookAPI from '~/api/bookAPI'
import { toast } from 'react-toastify'

function Home() {
  const [listBooks, setListBooks] = useState([])

  const fetchAllBook = async () => {
    try {
      const res = await bookAPI.getAllBook()
      setListBooks(res)
    } catch (error) {
      toast.error(error.response.message)
    }
  }
  useEffect(() => {
    fetchAllBook()
  }, [])

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

      {/* Categories */}
      {/* <div className='flex space-x-4 mb-4'>
        <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
          <h2 className='text-xl font-semibold'>Category 1</h2>
        </div>
      </div> */}
      {/* <ListCate /> */}

      <ListBook listBooks={listBooks} />
    </>
  )
}

export default Home
