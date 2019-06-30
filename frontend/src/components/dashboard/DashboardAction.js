import React from 'react'
import { Link } from 'react-router-dom'

const DashboardAction = () => {
    return (
    <div className="dash-buttons">
        <Link to='/edit-profile' className="btn btn-light"
          ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to='/quote' className="btn btn-light"
          ><i className="fab fa-black-tie text-primary"></i> Request a Quote</Link>
        <Link to='/history' className="btn btn-light"
          ><i className="fab fa-black-tie text-primary"></i> Quote History</Link>
      </div>
    )
}

export default DashboardAction
