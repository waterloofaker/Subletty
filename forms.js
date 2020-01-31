import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { writeUserData } from "./components/Firebase/config"

const LOGIN_STATE = {
    location: '',
    email: '',
    message: '',
    error: null,
};

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...LOGIN_STATE }
    }

    writeData = event => {
        console.log(typeof this.state.location)
        writeUserData(this.state.location, this.state.email, this.state.message)
    }

    render() {
        return (
            <form id="form" class="topBefore" onSubmit={this.writeData}>
                <input id="location" type="text" placeholder="Title" onChange={e => this.state.location = e.target.value}></input>
                <input id="email" type="text" placeholder="Address" onChange={e => this.state.email = e.target.value}></input>
                <textarea id="message" type="text" placeholder="Description" onChange={e => this.state.message = e.target.value}></textarea>
                <input id="submit" type="submit" value="Submit"></input>
            </form>
        )
    }
}

class UploadFile extends React.Component {
    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
            </span>
                </div>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
    </label>
                </div>
            </div>
        )
    }
}

function SubmitForm() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '18rem' }}>

            <button variant="primary" onClick={handleShow} id="Modal" class="oval">
                Upload Listing
                </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Contact />
                    <UploadFile />
                </Modal.Body>
            </Modal>
        </Card>

    )
}

export default SubmitForm