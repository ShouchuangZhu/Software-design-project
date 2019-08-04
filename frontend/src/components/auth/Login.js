import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../action/auth';
import './login.css'
import logo from '../../img/fq_logo.png';

const Login = ( { login, isAuthenticated}) => {
    const [formData, setFormData] = useState({ 
        email: '',
        password: '',  
    }); //react hook

const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
});
const onSubmit = async e =>{
    e.preventDefault();
    login(email, password);
}
//if logged in redireact
if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
}
    const { email, password} = formData;
    return (
        <Fragment>
            <section className="bg-login">
            <section className="login">
            <div><img  src={logo} className="App-logo" alt="Logo"/></div>
            <p className="lead"><i className="fas fa-user"></i> Login</p>
            <form className="form" onSubmit = {e => onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address"  name="email" value = {email} onChange={e=> onChange(e)} required />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password} onChange={e=> onChange(e)}
                    minLength="6"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
            </section>
            </section>
        </Fragment>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
