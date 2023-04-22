import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function User() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', age: 30 },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', age: 25 },
        { id: 3, name: 'Bob Johnson', email: 'bjohnson@example.com', age: 45 },
        { id: 4, name: 'Sarah Lee', email: 'sarahlee@example.com', age: 27 }
      ]);
  return (
    
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 class="h3 mb-2 text-gray-800">Users</h1>
       <Link to={"/user_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
      </div>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
           <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div> 
                        <div class="card-body">
                        <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Age</th>
                                            
                                            

                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Age</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
                          
                          
                          </table>

                          </div>
                          </div>                 
            </div>
      </div>
   
  )
}

export default User
