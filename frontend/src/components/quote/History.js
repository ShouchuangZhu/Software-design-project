import React, { Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { quoteHistory } from '../../action/history'

const QuoteHis = ({quoteHistory})=> {

    return (
        <Fragment>
    <h1 class="large text-primary">
        Quote History
      </h1>
      <p class="lead">Your Quote History</p>

        <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>      
    </Fragment>
    )
}

QuoteHis.propTypes = {
    createQuote: PropTypes.func.isRequired,
}

export default connect(null, {quoteHistory})(withRouter(QuoteHis));