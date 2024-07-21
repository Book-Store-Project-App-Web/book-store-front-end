import Header from '~/components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className='container mx-auto p-4'>
          {/* Banner */}
          <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <img src='path/to/banner-image.png' alt='Banner' className='w-full h-64 object-cover rounded-lg' />
          </div>

          {/* Categories */}
          <div className='flex space-x-4 mb-4'>
            <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
              <h2 className='text-xl font-semibold'>Category 1</h2>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
              <h2 className='text-xl font-semibold'>Category 2</h2>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
              <h2 className='text-xl font-semibold'>Category 3</h2>
            </div>
          </div>

          {/* Products */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <img src='path/to/product-image.png' alt='Product' className='w-full h-48 object-cover rounded-lg mb-4' />
              <h3 className='text-lg font-semibold'>Product Name</h3>
              <p className='text-gray-600'>$100</p>
            </div>
            {/* Repeat for more products */}
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
