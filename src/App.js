
import './App.css';
import image from "./images/users/avatar-2.jpg";
function App() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card bg-primary">
          <div className="card-body profile-user-box">
            <div className="row">
              <div className="col-sm-8">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="avatar-lg">
                      {<img src={image} alt="" className="rounded-circle img-thumbnail" /> }
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <h4 className="mt-1 mb-1 text-white">Michael Franklin</h4>
                      <p className="font-13 text-white-50"> Authorised Brand Seller</p>
                      <ul className="mb-0 list-inline text-light">
                        <li className="list-inline-item me-3">
                          <h5 className="mb-1">$ 25,184</h5>
                          <p className="mb-0 font-13 text-white-50">Total Revenue</p>
                        </li>
                        <li className="list-inline-item">
                          <h5 className="mb-1">5482</h5>
                          <p className="mb-0 font-13 text-white-50">Number of Orders</p>
                        </li>
                      </ul>  
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center mt-sm-0 mt-3 text-sm-end">
                  <button type="button" className="btn btn-light">
                    <i className="mdi mdi-account-edit me-1"></i> Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
