

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import CreateReceipt from './pages/CreateReceipt';
import SearchReceipt from './pages/SearchReceipt';
 
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/search-receipt' element={<SearchReceipt/>} />
      <Route path='/create-receipt' element={<CreateReceipt />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App