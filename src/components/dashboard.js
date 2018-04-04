import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import axios from 'axios'
import Header from './header'

import './styles/dashboard.css'


export default class Dashboard extends Component {
    constructor() {
        super()
    }
    // componentDidMount() {
    //     axios.get('/api/me').then( () => {
    //         console.log('good job!')
    //     }).catch( () => {this.props.history.push('/')})
    // }
    
    render(){
    return(
        <div className='dashboard_container_parent'>
        <Header />
                <div className='dashboard_container'>
                <Link to='/wizard1'>
                  <div className='new_property_button'>Add New Property</div>
                </Link>
                </div>
        </div>
    )
 } 
}