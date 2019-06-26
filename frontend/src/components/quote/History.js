import React, {Component, Fragment}from 'react';

class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            loading: false,
        }
    }
    componentDidMount(){
        fetch('/api/quote').then(res => res.json()).then(json => {
            this.setState({
                loading: true,
                items: json,
            })
        })
    }
    render(){
        var { loading, items } = this.state;
        if(!loading){
            return <div>Loading....</div>;
        }
        return(
            <Fragment>
                <ul>
                    { items.map(item=>(
                        <li key = {item.date}>
                            {item.gallonRequested} 
                            {item.date}
                            {item.price}
                            {item.deliveryAddress1}
                            {item.deliveryAddress2}
                            {item.city}
                            {item.state}
                            {item.zipcode}
                            {item.totalAmountDue}
                        </li>
                    )) };
                </ul>
            </Fragment>
            );
    }
}
export default History;