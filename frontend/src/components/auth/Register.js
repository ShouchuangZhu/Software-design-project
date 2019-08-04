import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../action/alert';
import { register } from '../../action/auth';
import PropTypes from 'prop-types';
import './register.css'

const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    }); //react hook

const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
});
const onSubmit = async e =>{
    e.preventDefault();
    if(password !== password2){
        setAlert('Passowrd does not match', 'danger');
    } else {
        register({name, email, password, password2});
    }
}
if(isAuthenticated){
    return <Redirect to='/dashboard' />
}

    const { name, email, password, password2} = formData;
    return (
        <Fragment>
            <section className="bg-register">
            <section className="register">
            <div className="register-inner">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {e => onSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange = {e => onChange(e)} required />
                </div>
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
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value = {password2} onChange={e=> onChange(e)}
                    minLength="6"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Sign Up" />
            </form>
            <p className="my-1">
            Already have an account? <Link to='/login'>Login</Link>
            </p>
            </div>
            </section>
            </section>
        </Fragment>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);
