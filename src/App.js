import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidebar';
import "./css/sb-admin-2.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import Usercreate from './Usercreate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/user" element={<User/>}></Route>
         <Route path="/user_create" element={<Usercreate/>}></Route>
       </Routes>
      
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
