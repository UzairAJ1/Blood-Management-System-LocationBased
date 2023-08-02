import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';import DonnersCrude from './DonnersCrude';

import MydonnersCrud from './MydonnersCrud';
import Dashboard from './Comp/Layout/Dashboard';
import Gapp from './Comp/Gapp';
import Bloodrequest from './Comp/Bloodrequest';
import Login from './Comp/Login';
import Azmap from './Comp/Azmap';
import Requestatus from './Comp/Requestatus';
import DonnerLocation from './Comp/DonnerLocation';
import Blog from './Comp/Blog';
import Blog2 from './Comp/Blog2';
import Testimoneials from './Comp/Donationinfo';

import Donationinfo from './Comp/Testimoneials';
function App() {  
  return (
    <Router>
     
    <Routes>
    <Route exact path='/' element={< Dashboard />}></Route>
    <Route exact path='/MydonnersCrud' element={< MydonnersCrud />}></Route>
    <Route exact path='/Gapp' element={< Gapp />}></Route>
    <Route exact path='/Bloodrequest' element={< Bloodrequest />}></Route>
    <Route exact path='/Login' element={< Login />}></Route>
    <Route exact path='/Azmap' element={< Azmap />}></Route>
    <Route exact path='/Requestatus' element={< Requestatus />}></Route>
    <Route exact path='/DonnerLocation' element={< DonnerLocation />}></Route>
    <Route exact path='/Blog' element={< Blog />}>Blog</Route>
    <Route exact path='/Blog2' element={< Blog2 />}>Blog2</Route>
    <Route exact path='/Testimoneials' element={< Testimoneials />}>Testimoneials</Route>
    
    <Route exact path='/Donationinfo' element={< Donationinfo />}>Donationinfo</Route>
    
</Routes>
  </Router>
    
  );
}

export default App;
