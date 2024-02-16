
import {Routes,Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import Page from './Components/pages/page';
import Wishlist from './Components/pages/Wishlist';
import Add from './Components/Admin/Add';
import Cart from './Components/pages/Cart';
import ViewId from './Components/pages/ViewId';
import EditId from './Components/Admin/EditId';
import Admin from './Components/Admin/Admin';
import Delete from './Components/Admin/Delete';
import AdminView from './Components/Admin/AdminView';
import Filter from './Components/pages/Filter';


function App() {
  return (
    <>
      <div className="Appx">
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
         <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/page" element={<Page/>}/>
         <Route exact path="/wishlist" element={<Wishlist/>}/>
         <Route exact path="/add" element={<Add/>}/>
         <Route exact path="/cart" element={<Cart/>}/>
         <Route exact path="/filter/:category" element={<Filter/>}/>
         <Route exact path="/view/:id" element={<ViewId/>}/>
         <Route exact path="/edit/:id" element={<EditId/>}/>
         <Route exact path="/admin/:username" element={<Admin/>}/>
         <Route exact path="/admin" element={<Admin/>}/>
         <Route exact path="/delete" element={<Delete/>}/>
         <Route exact path="/adview" element={<AdminView/>}/>
        </Routes>
      </div >
    </>
  );
}

export default App;