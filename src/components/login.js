import React, { Component } from 'react'
import authLogo from '../assets/auth_logo.png'
import './styles/login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.registerUser = this.registerUser.bind(this)
        this.loginUser = this.loginUser.bind(this)

    }


    registerUser(){
        axios.post('/api/auth/register', {username: this.state.username, password: this.state.password})
        .then( () => {this.props.history.push('/dashboard')})
    }

    loginUser() {
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
        .then( () => {this.props.history.push('/dashboard')})
    }

    render() {
        return(
            
            <div className='login_parent_container'>

              <section className='login_wrapper'>

                    <div className='logo_container'>

                      <img src={authLogo} alt='logo'/>
                    </div>
                <div className='input_container'>
                    <div style={{paddingLeft: '15px', marginTop: '20px', fontSize: '20px', fontWeight: 'bold'}}>Username</div>
                    
                    <input className='login_input' type='email'
                        onChange={ (e) => this.setState({ username: e.target.value}) }
                    />
                    <div style={{paddingLeft: '15px', marginTop: '20px', fontSize: '20px', fontWeight: 'bold'}}>Password</div>
                    
                    <input className='login_input' type='password'
                        onChange={ (e) => this.setState({password: e.target.value}) }
                    />
                </div>
                <div className='button_container'>

                    <div onClick={ () => this.loginUser() } className='login_button'>Login</div>

                    <div onClick={ () => this.registerUser() } className='register_button'>Register</div>
                </div>
              </section>
            </div>
        )
    }
}


