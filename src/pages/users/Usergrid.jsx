import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function Usergrid() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    setUsers([
      { id: 1, name: 'jamsheer', email: 'jamsheer@gmail.com', role: "leader", age: "25", active: true },
      { id: 2, name: 'muhammed', email: 'thafseer@gmail.com', role: "developer", age: "30", active: true },
      { id: 3, name: 'jamsheer', email: 'jamsheer@gmail.com', role: "leader", age: "28", active: true }
    ])
  }, []);

  function deleteUser(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'User will have Admin Privileges',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#727cf5',
        cancelButtonColor: '#d54e69',
        confirmButtonText: 'Yes!',
    }).then((result) => {
        if (result.isConfirmed) {
            setUsers(users => users.filter(x => x.id !== id));
            toast.success("Student deleted successfully.. !");
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
}
  return (
    <div class="innerpage"> 
      <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div ><h4 className="page-title">Users List</h4></div>
          <div >
            <Link to={`/studentsdetails`} className="btn btn-sm btn-primary mr-1">Create</Link>
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
                  {<Link to={`/students/edit/${user.id}`} className="btn btn-sm btn-primary mr-1"><i className="mdi mdi-square-edit-outline "></i></Link>} &nbsp;
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