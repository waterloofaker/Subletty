import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import rOne from './pics/RoomOne.jpg'
import rTwo from './pics/RoomTwo.jpg'
import rThree from './pics/RoomThree.jpg'
import Card from 'react-bootstrap/Card'

import ListGroupItem from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/Card'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class Contact extends React.Component {
    render() {
        return (
            <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="NAME"></input>
                <input id="email" type="text" placeholder="E-MAIL"></input>
                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="Submit"></input>
            </form>
        )
    }
}


function RentalCard(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <modal style={{display: "inline-block", margin:"10px"}}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={rOne} />
                    <Card.Body>
                        <Card.Title>{props.address}</Card.Title>
                        <Card.Text>
                            {props.descriptions}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{props.email}</ListGroupItem>
                        <ListGroupItem>{props.address}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>

                        <Button variant="primary" onClick={handleShow} id="Modal" >
                            Contact Subletter
                     </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body><Contact /></Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
        </modal>
    )
}



export default RentalCard