import React, { Component } from 'react'
import logo from '../assets/header_logo.png'
import axios from 'axios'

import './styles/header.css'

export default class Header extends Component {
    constructor() {
        super()

        this.logout = this.logout.bind(this)
    }

    logout() {
        axios.post('/api/auth/logout')
        .then( () => console.log('User Logged out'))
        window.location.href = '/'
    }

    render() {
        console.log(window.location)
    return( 
    <div className='header_parent'>
        <div className='header_container'>
            <section className='header_div_left'>
                <img src={logo} alt="header logo"/>
                <p id='Houser'>Houser</p>
                <p>Dashboard</p>
            </section>

            <section className='header_div_right'>
                <div onClick={ () => this.logout() }>Logout</div>
            </section>
        </div>
    </div>

  )
 }   
}