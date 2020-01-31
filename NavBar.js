import { createUser, signIn } from "./components/Firebase/config"

import React, { Component } from 'react';
import './index.css';
//import { FirebaseContext } from './components/Firebase/index';
import 'bootstrap/dist/css/bootstrap.min.css';



import Form from 'react-bootstrap/Form'

import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'

import { Button } from 'react-bootstrap'

import SubmitForm from './forms'

var LoggedIn = true

function loggedOn() {

}

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const LOGIN_STATE = {
    email: '',
    password: ''
}


class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...LOGIN_STATE }
    }

    SubmitForm = event => {
        try {
            signIn(this.state.email, this.state.password)
          }
          catch(err) {
            console.log("Doesn't Work")
          }
        this.props.signLog()
        console.log(this.state.email)
        console.log(this.state.password)
 
        event.preventDefault()
    }
    render() {
        const {
            email,
            password
        } = this.state;
        return (
            <Form onSubmit={this.SubmitForm}>
                <Form.Group controlId="formBasicEmail">
                    <center><h1>Login</h1></center>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => this.state.email = e.target.value} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => this.state.password = e.target.value} />
                </Form.Group>
                <div class="text-center">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
                <hr></hr>
                <Button variant="primary" class="text-center" onClick={this.props.signUpClick}>
                    Sign Up
                </Button>
                <hr>
                </hr>
            </Form >
        )
    }

}

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    SubmitForm = event => {
        this.props.signLog()
        createUser(this.state.email, this.state.passwordOne)
        this.setState({ ...INITIAL_STATE });
        event.preventDefault();
    }
    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = false;
        // passwordOne !== passwordTwo ||
        // passwordOne === ' ' ||
        // email === ' ' ||
        // username === ' ';

        return (
            <Form onSubmit={this.SubmitForm}>
                <Form.Group controlId="formBasicEmail">
                    <center><h1>SignUp</h1></center>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="Email" type="email" placeholder="Enter email" onChange={e => this.state.email = e.target.value} />
                </Form.Group>
                <Form.Group controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name="User Name" type="userName" placeholder="Typer User Name" onChange={e => this.state.username = e.target.value} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="passwordOne" type="password" placeholder="Password" onChange={e => this.state.passwordOne = e.target.value} />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="passwordTwo" type="password" placeholder="Re Type Your Password" />
                </Form.Group>
                <div class="text-center">
                    <Button variant="primary" disabled={isInvalid} type="submit" onClick={this.props.formState}>
                        Sign Up
                    </Button>
                </div>
                <hr>
                </hr>
            </Form>)
    }
}

// Start of Navigation Bar
class LogInSignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            closeForm: true,
            signUp: false,
            logIn: true
        }
        this.signUpClick = this.signUpClick.bind(this)
        this.formState = this.formState.bind(this)
    }

    formState() {
        this.setState(prevState => {
            return {
                closeForm: false
            }

        })
    }

    signUpClick() {
        this.setState(prevState => {
            return {
                signUp: true,
                logIn: false
            }
        })
    }
    render() {
        return (
            <>
                <div style={{ display: this.state.signUp && this.state.closeForm ? 'block' : 'none' }}>
                    <SignUpForm formState={this.formState} signLog={this.props.signLog} />
                </div>

                <div style={{ display: this.state.logIn && this.state.closeForm ? 'block' : 'none' }}>
                    <LogInForm signUpClick={this.signUpClick} signLog={this.props.signLog} formState={this.formState} />
                </div>
            </>
        );
    }
}

class LogInButton extends React.Component {
    
    constructor(){
        super()
        this.state = {
            closedModal: true
        }
        this.closeModal = this.closeModal.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    closeModal(){
        this.setState(prevState => {
            return {
                closedModal: true
            }
        })
    }

    toggleModal(){
        console.log()
        if (this.state.closedModal){
            this.setState(prevState => {
                return {
                    closedModal: false
                }
            })
        }
        this.setState(prevState => {
            return {
                closeModal: true
            }
        })

    }


    render() {
        return (
            <>
                <button id="myBtn" class="oval" onClick={this.toggleModal}>Login</button>
                <div id="myModal" class="modal" style={{display: this.state.closedModal ? 'none':'block'}}>
                    <div class="modal-content">
                        <span class="close" onClick={this.closeModal}>&times;</span>
                        <LogInSignUp signUpClick={this.signUpClick} signLog = {this.props.signLog} closeModal={this.closeModal}/>
                    </div>
                </div>
            </>
        );
    }
}


class MyTab extends React.Component {
    constructor() {
        super()
        this.state = {
            signedLoggged: false
        }
        this.signLog = this.signLog.bind(this)
    }

    signLog() {
        this.setState(prevState => {
            return {
                signedLogged: true
            }

        })
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Subletty</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav style={{ display: this.state.signedLogged ? 'none' : 'block' }}>
                        <LogInButton signLog={this.signLog} />
                    </Nav>

                    <Nav style={{ display: this.state.signedLogged ? 'block' : 'none' }}>
                        <div class="CursiveFont spaces">Welcome</div>
                    </Nav>

                    <Nav style={{ display: this.state.signedLogged ? 'block' : 'none'}}>
                        <SubmitForm/>
                    </Nav>

                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// End of Navigation Bar
export default MyTab