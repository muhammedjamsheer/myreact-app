import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';

function Usergrid() {
  const [users, setUsers] = useState(null)
  const URI = 'http://localhost:5000/users';


  useEffect(() => {
    fetchusers();
  }, [])

  const fetchusers = async () => {
    const response = await axios.get(`${URI}`);
    setUsers(response.data)
  }

  const removeUser = async (id) => {
    const res = await axios.delete(`${URI}/${id}`)
    if (res.status === 200) {
      fetchusers();
    }
  }

  function deleteUser(id) {
    Swal.fire({
      title: 'Are you sure?',
      // text: 'User will have Admin Privileges',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#727cf5',
      cancelButtonColor: '#d54e69',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.value) {
        removeUser(id)
        toast.success("User deleted successfully.. !");
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
  }


  return (
    <div className="innerpage">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <div ><h4 className="page-title">Users List</h4></div>
            <div >
              <Link to={`/userscreate`} className="btn btn-sm btn-primary mr-1">Create</Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover table-sm" >
            <thead>
              <tr>
                <th style={{ width: '10%' }}>Sl No.</th>
                <th style={{ width: '30%' }}>Name</th>
                <th style={{ width: '25%' }}>Email</th>
                <th style={{ width: '25%' }}>Role</th>
                <th style={{ width: '10%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) =>
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    {<Link to={"/usersedit"} className="btn btn-sm btn-primary mr-1"><i className="mdi mdi-square-edit-outline "></i></Link>} &nbsp;
                    <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" ><i className="mdi mdi-trash-can-outline"></i></button>
                  </td>
                </tr>
              )}
              {!users &&
                <tr>
                  <td colSpan="5" className="text-center">
                    <div className="spinner-border spinner-border-lg align-center"></div>
                  </td>
                </tr>
              }
              {users && !users.length &&
                <tr>
                  <td colSpan="5" className="text-center">
                    <div className="p-2">No Students To Display</div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Usergrid