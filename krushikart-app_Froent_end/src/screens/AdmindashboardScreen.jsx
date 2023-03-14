import React from 'react'
import { useAuth } from '../context/auth'
import AdminMenus from './Admin/AdminMenus'

const AdmindashboardScreen = () => {
  const [auth] = useAuth()

  return (
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <AdminMenus />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3>
              {' '}
              Admin Name : {auth.user.firstName + ' ' + auth.user.lastName}
            </h3>
            <h3> Admin Email : {auth.user.email}</h3>
            <h3> Admin Contact : {auth.user.contactNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmindashboardScreen
