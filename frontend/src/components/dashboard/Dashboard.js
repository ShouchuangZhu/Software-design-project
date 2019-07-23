import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getCurrentProfile} from '../../action/profile';
import DashboardAction from './DashboardAction';
import Spinner from '../layout/Spinner'
import "./dash.css";



const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
    useEffect(()=>{
        getCurrentProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <section class='dashb'>
        <h1 className = "large text-primary">Dashboard</h1>
        <p className = "lead">
            <i className = "fas fa-user"></i>Welcome {user && user.name}
        </p>
        {profile !== null ? <Fragment>
            <DashboardAction />
        </Fragment> : <Fragment>
            <p>Please complete profile before request a quote</p>
            <Link to ='./create-profile' className = "btn btn-primary my-1">
                Create Profile
            </Link>
        </Fragment>}
        </section>
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
