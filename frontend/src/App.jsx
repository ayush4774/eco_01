
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home, CreateProduct,MyProducts,Cart,ProductDetails,Profile,CreateAddress,SelectAddress,OrderConfirmation,MyOrdersPage} from './Routes.jsx'

import './App.css';
// import MyOrdersPage from './pages/myorders.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/create-product" element={<CreateProduct/>}/>
      <Route path="/create-product/:id" element={<CreateProduct/>}/>
      <Route path="/my-products" element={<MyProducts/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create-address" element={<CreateAddress/>}/>
      <Route path="/select-address" element={<SelectAddress/>}/>
      <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
      <Route path="/myorders" element={<MyOrdersPage/>}></Route>

    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
