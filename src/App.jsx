import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import LogIn from './pages/Auth/LogIn'
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'login', element: <LogIn /> },
        { path: 'register', element: <Register /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
