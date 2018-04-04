import React, { Component } from 'react'
import axios from 'axios'
import Header from './header'


export default class Dashboard extends Component {
    constructor() {
        super()

        this.logout = this.logout.bind(this)
    }
    componentDidMount() {
        axios.get('/api/me').then( () => {
            console.log('good job!')
        }).catch( () => {this.props.history.push('/')})
    }
    

    logout() {
        axios.post('/api/auth/logout')
        .then( () => console.log('User Logged out'))
        this.props.history.push('/')
    }

    render(){
        console.log(this)
    return(
        <div>
            <p>Dashboard view!</p>
            <button onClick={ () => this.logout()}>logout</button>
        </div>
    )
 } 
}