import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { photos } from './photos.js'


export default class Main extends Component {
    
    render() {
        return ( 
            <Gallery images= { photos } enableImageSelection={ false }/>
        )
    }
}