import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input} from 'reactstrap';
import { CSSTrasition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Quote extends Component {
    render(){
        return(
            <Container>
                
                <Input type="text" placeholder="gallon" /><br />
                
                

               
            </Container>
        )
    }
}

export default Quote;