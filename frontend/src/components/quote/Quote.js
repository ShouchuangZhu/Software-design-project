import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createQuote, getPricing, askPricing } from '../../action/quote'
import DatePicker from "react-datepicker"; 
import Toggle from 'react-toggle';
import "react-datepicker/dist/react-datepicker.css";
import "./quote.css";

const Quote = ({quote:{quote, loading},createQuote, getPricing, askPricing})=> {


    const [formData, setFormData] = useState({
        gallonRequested: '',
        date: new Date(),
        price: '',
        totalAmountDue: '',
        deliveryAddress1: '',
        deliveryAddress2: '',
        city: '',
        state: '',
        zipcode: '',
        check: false
    });
    useEffect(()=>{
      getPricing();
      if(quote){
      setFormData({
        deliveryAddress1: loading || !quote.deliveryAddress1 ? '' : quote.deliveryAddress1,
        deliveryAddress2: loading || !quote.deliveryAddress2 ? '' : quote.deliveryAddress2,  
        city: loading || !quote.city ? '' : quote.city,
        state: loading || !quote.state ? '' : quote.state,
        zipcode: loading || !quote.zipcode ? '' : quote.zipcode,
        gallonRequested: loading || !quote.gallonRequested ? '': quote.gallonRequested,
        price: loading || !quote.price ? '': quote.price,
        totalAmountDue: loading || !quote.totalAmountDue ? '': quote.totalAmountDue  
         
      })
    }
    }, [loading]);

    const {
        gallonRequested,
        date,
        price,
        totalAmountDue,
        deliveryAddress1,
        deliveryAddress2,
        city,
        state,
        zipcode,
        check
    } = formData;

    

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const handleChange=(date)=> {
  setFormData({...formData, date: date})
}

const handleBaconChange= e =>{
  setFormData({...formData, check: true})
}

const onSubmit = e => {
    e.preventDefault();
      if(check){
      askPricing(formData);
      window.location.reload();
      } else {
        createQuote(formData);
      }
    
    // 
    
};

    return (
        <Fragment>
          <section className="bg-quote">
          <section className = "quote">
            <div className="quote-inner">
    <h1 className="large text-primary">
        Making a quote
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Please fill in info!
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit = {e=> onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="*Gallon Requested" name="gallonRequested" value = {gallonRequested} onChange={(e)=> onChange(e)}/>
        </div>
        <DatePicker selected = {date} onChange = { (date) => handleChange(date)} />
        
        <div className="form-group">
          <input type="text" placeholder="Delivery address" name="deliveryAddress1" value = {deliveryAddress1} onChange={(e)=> onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="address2 (OPTIONAL)" name="deliveryAddress2" value = {deliveryAddress2} onChange={(e)=> onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="*city" name="city" value = {city} onChange={(e)=> onChange(e)} />
        </div>
        <div className="form-group">
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
          <input type="text" placeholder="*Suggested price" name="price" value = {price}  />
        </div>
        <div className="form-group">
          <input type="text" placeholder="*Total Amount Due" name="totalAmountDue" value = {totalAmountDue }  />
        </div>
<label className = "price-label">
<span className = "price"><h2>Get Price</h2></span>
  <Toggle
    onChange={(e)=> handleBaconChange(e)} />
    <div><small>*Please checked for Suggested Price</small></div>
</label>
        <input type="submit" className="btn btn-primary my-1"  />
        <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>
      </form>
      </div>
      </section>
      </section>      
    </Fragment>
    )
}

Quote.propTypes = {
    createQuote: PropTypes.func.isRequired,
    askPricing: PropTypes.func.isRequired,
    getPricing: PropTypes.func.isRequired,
    quote: PropTypes.object.isRequired,

}
const mapStateToProps = state =>({
  quote: state.quote
})

export default connect(mapStateToProps, {createQuote, askPricing, getPricing})(withRouter(Quote));