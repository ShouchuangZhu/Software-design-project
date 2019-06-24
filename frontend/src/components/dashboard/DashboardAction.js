import React from 'react'
import { Link } from 'react-router-dom'

const DashboardAction = () => {
    return (
    <div class="dash-buttons">
        <Link to='/edit-profile' class="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to='/quote' class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> Request a Quote</Link>
        
      </div>
    )
}

export default DashboardAction
