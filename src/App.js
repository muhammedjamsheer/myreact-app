
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Notefound from './components/Notefound';
import Dashbord from './pages/dashbord/Dashbord';
import Usergrid from './pages/users/Usergrid';
import Userform from './pages/users/Userform';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <div className="main-container">
          <div className="wrapper">
            <Sidebar />


            <div className="content-page">
              <div className="content">

                <Navbar />



                <Routes>
                  <Route path="/" >
                    <Route index element={<Dashbord />} />

                    <Route path="users" element={<Usergrid />} />

                    <Route path="userscreate" element={<Userform />} />

                    <Route path="/usersedit" element={<Userform />} />

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
