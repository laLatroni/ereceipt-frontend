

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateReceipt from './pages/CreateReceipt';
import SearchReceipt from './pages/SearchReceipt';
import AdminLayout from './layouts/AdminLayout';
import NotFound from './pages/NotFound';
import PDFView from './pages/PDFView';
 
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup /> } />
      <Route element={<AdminLayout />}>
        <Route path='/search-receipt' element={<SearchReceipt/>} />
        <Route path='/create-receipt' element={<CreateReceipt />} />
        <Route path='/generatepdf/:id' element={<PDFView />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App