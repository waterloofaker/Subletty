import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

import { Button } from 'react-bootstrap'

import AutomaticSlide from "./SlideShow"
import FormControl from 'react-bootstrap/Form'
import MyTab from "./NavBar"
import 'firebase/auth';
import RentalCard from "./rentals"
import * as firebase from "firebase/app";
import 'firebase/firebase-firestore'
import 'firebase/auth';
import 'firebase/firestore';

// importing NavBar //


// importing SlideShow//

var db = firebase.firestore();
var collectionRef = db.collection("test")



class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            intro: true,
            search: false,
            listings: undefined
        }
        this.searchClick = this.searchClick.bind(this)
    }

    searchClick() {
        // this.mySetState()
        this.rentalObects()
        this.setState(prevState => {
            return {
                intro: false,
                search: true
            }
    })}



    // mySetState = () => {
    //     this.setState(prevState => {
    //         return {
    //             listings: await this.rentalObects()
    //         }
    //     })}


    rentalObects = () => { 
        console.log("entering")
        collectionRef.get({ source: "server" })
            .then(value => value.docs)
            .then((docs) => {
                return docs.map(doc => doc.id);
            })
            .then((docIds) => {
                var docPromises = docIds.map((docId) => {
                    var docRef = collectionRef.doc(docId);
                    return docRef.get({ source: 'server' });
                });
                return Promise.all(docPromises);
            })
            .then((docObjs) => {
                return docObjs.map(doc => doc.data())
            }).then((listings => {
                console.log(listings)
                this.setState (prev =>{
                    return{
                        listings: (listings.map(listing => <RentalCard address={listing.Address} descriptions={listing.Descriptions} email={listing.Email} style={{display:"inline"}} />))
                }
            }
                )}))}



render() {
    return (
        <>
            <div style={{ display: this.state.intro ? 'block' : 'none' }}>
                <AutomaticSlide />
                <div class="box">
                    <button style={{ backgroundColor: "Transparent", border: "none", }} onClick={this.searchClick}>
                        <a href="#" class="btn btn-white btn-animation-1 bold">View Sublets</a>
                    </button>
                </div>
            </div>

            <div style={{ display: this.state.search ? 'block' : 'none' }}>
                {this.state.listings}
            </div>
        </>);
}
}


ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
ReactDOM.render(<MainPage />, document.getElementById("SlideShow"));


ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
ReactDOM.render(<MainPage />, document.getElementById("SlideShow"));
