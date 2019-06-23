import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile } from '../../action/profile'

const CreateProfile = ({createProfile, history }) => {
    const [formData, setFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        fullname: ''
    });

    const {
        address1,
        address2,
        city,
        state,
        zipcode,
        fullname
    } = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
}

    return (
        <Fragment>
    <h1 class="large text-primary">
        Create Your Profile
      </h1>
      <p class="lead">
        <i class="fas fa-user"></i> Please fill in your profile!
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit = {e=> onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="*address line 1" name="address1" value = {address1} onChange={(e)=> onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="address2" name="address2" value = {address2} onChange={(e)=> onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="*city" name="city" value = {city} onChange={(e)=> onChange(e)} />
        </div>
        <div class="form-group">
          <select name="state" value = {state} onChange={(e)=> onChange(e)}>
            <option value="ERROR">*state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="*zipcode" name="zipcode" value = {zipcode} onChange={(e)=> onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="*fullname" name="fullname" value = { fullname }  onChange={(e)=> onChange(e)}/>
        </div>
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>
      </form>      
    </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}



export default connect(null, { createProfile })(withRouter(CreateProfile));
