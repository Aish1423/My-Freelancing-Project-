import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Master from './Layouts/Master';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import ClientMaster from './Layouts/ClientMaster';
import BdeMaster from './Layouts/BdeMaster';
import View_AllBDE from './Client_Working/View_AllBDE';
import AddProject from './Client_Working/AddProject';
import View_AllProjects from './Client_Working/View_AllProjects';
import Client_Add from './Client_Working/Client_Add';
import View_AllBid from './Client_Working/View_AllBid';
import Update_Project from './Client_Working/Update_Project';
import Add_Bde from './Bde Working/Add_Bde';
import View_AllClient from './Bde Working/View_AllClient';
import View_AllProject from './Bde Working/View_AllProject';
import Add_Category from './Admin Working/Add_Category';
import Login from './Components/Login';
import Manage_Category from './Admin Working/Manage_Category';
import Bid_Details from './Client_Working/Bid_Details';
import Update_Profile from './Client_Working/Update_Profile';
import Change_Password from './Client_Working/Change_Password';
import Edit_Category from './Admin Working/Edit_Category';
import Manage_Bdes from './Admin Working/Manage_Bdes';
import Manage_Clients from './Admin Working/Manage_Clients';
import Client_Projects from './Admin Working/Client_Projects';
import UpdateBde_Profile from './Bde Working/UpdateBde_Profile';
import ChangeBde_Password from './Bde Working/ChangeBde_Password';
import ManageBde_Category from './Bde Working/ManageBde_Category';
import Category_Projects from './Bde Working/Category_Projects';
import View_Bids from './Bde Working/View_Bids';
import Clients_Proj from './Client_Working/Clients_Proj';
import Bid_History from './Bde Working/Bid_History';
import ChangeAdmin_Password from './Admin Working/ChangeAdmin_Password';
import Bde_Bids from './Admin Working/Bde_Bids';
import Add_Bid from './Bde Working/Add_Bid';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*============================================ Admin Header Routes=========================================== */}

          <Route path='/' element={<BdeMaster />}>
            <Route index element={<About />} />
            <Route path='AddBde' element={<Add_Bde />} />
            <Route path='ViewAllClient' element={<View_AllClient />} />
            <Route path='ViewAllProject' element={<View_AllProject />} />
            <Route path='Login' element={<Login />} />
            <Route path='UpdateBde' element={<UpdateBde_Profile />} />
            <Route path="ChangePassword" element={<ChangeBde_Password />} />
            <Route path="ManageBdeCategory" element={<ManageBde_Category />} />
            <Route path="CategoryProjects/:id" element={<Category_Projects />} />
            <Route path='ViewBids/:id' element={<View_Bids />} />
            <Route path='BidHistory' element={<Bid_History />} />
            <Route path='AddBid/:id/:clientId' element={<Add_Bid />} />
          </Route>

          <Route path='/Client' element={<ClientMaster />}>
            <Route index element={<About />} />
            <Route path='AllBDE' element={<View_AllBDE />} />
            <Route path='AddProject' element={<AddProject />} />
            <Route path='ViewAllProject' element={<View_AllProjects />} />
            <Route path='Add' element={<Client_Add />} />
            <Route path='ViewAllBid' element={<View_AllBid />} />
            <Route path='UpdateProject/:id' element={<Update_Project />} />
            <Route path='BidDetails/:id' element={<Bid_Details />} />
            <Route path='UpdateClient' element={<Update_Profile />} />
            <Route path='ChangePassword' element={<Change_Password />} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Client_Add />} />
          </Route>

          <Route path='/Admin' element={<Master />}>
            <Route index element={<Dashboard />} />
            <Route path='About' element={<About />} />
            <Route path='AddCategory' element={<Add_Category />} />
            <Route path='Login' element={<Login />} />
            <Route path='ManageCategory' element={<Manage_Category />} />
            <Route path='EditCategory/:id' element={<Edit_Category />} />
            <Route path='ManageBdes' element={<Manage_Bdes />} />
            <Route path='ManageClients' element={<Manage_Clients />} />
            <Route path='ClientProjects/:id' element={<Client_Projects />} />
            <Route path='ChangePassword' element={<ChangeAdmin_Password />} />
            <Route path='BdeBids/:id' element={<Bde_Bids />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
