
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Notefound from './components/Notefound';
import Dashbord from './pages/dashbord/Dashbord';
import Usergrid from './pages/users/Usergrid';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <div className="main-container">
          <div class="wrapper">
            <Sidebar />


            <div class="content-page">
              <div class="content">

                <Navbar />



                <Routes>
                  <Route path="/" >
                    <Route index element={<Dashbord />} />
                    <Route path='userlist' element={<Usergrid />} />
                    <Route path='*' element={<Notefound />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
