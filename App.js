import './App.css';
import User from './user';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Adminprofile from './Adminprofile';
import Viewapp from './viewapp';
import Removeapp from './removeapp';
import Home from './home';
import Login from './Login';
 import Createac from './Createac';
 import Profile from './profile';
 import Findjob from './findjob';
 import Applynow from './applynow';
 import Companies from './Companies';
 import Details from './details';
import Submit from './submit';
import Upload from './upload';
import Hey from './Hey';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<User/>}/>
        <Route path="/Admin"element={<Admin/>}/>
        <Route path="/AdminLogin"element={<AdminLogin/>}/>
        <Route path="/Adminprofile"element={<Adminprofile/>}/>
        <Route path="/Viewapp"element={<Viewapp/>}/>
        <Route path="/Removeapp"element={<Removeapp/>}/>
        <Route path="/Home"element={<Home/>}/>
        <Route path="/Hey"element={<Hey/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Createac"element={<Createac/>}/> 
        <Route path="/Profile"element={<Profile/>}/>
        <Route path="/findjob"element={<Findjob/>}/>
        <Route path="/applynow"element={<Applynow/>}/>
        <Route path="/upload"element={<Upload/>}/>
        <Route path="/companies"element={<Companies/>}/>
        <Route path="/details"element={<Details/>}/>
        <Route path="/upload/submit"element={<Submit/>}/>
        

      </Routes>
    </Router>
  );
}export default App;