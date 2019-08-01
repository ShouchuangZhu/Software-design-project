import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../img/fq_logo_350.png';


const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
    return <Redirect to = '/dashboard' />
  }
    return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div><img  src={logo} className="App-logo" alt="Logo"/></div>
          <p className="lead">
            Getting the lastest and most competitive fuel quote
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary">Sign Up</Link>
            <Link to='/login' className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps) (Landing);
