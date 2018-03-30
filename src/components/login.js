import React, { Component } from 'react'
import authLogo from '../assets/auth_logo.png'
import './styles/login.css'
import axios from 'axios'

export default class Login extends Component {


    registerUser(){
        axios.post('/api/auth/register', {})
    }

    loginUser() {
        axios.post('/api/auth/login')
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
                        onChange={(e) => e.target.value}
                    />
                    <div style={{paddingLeft: '15px', marginTop: '20px', fontSize: '20px', fontWeight: 'bold'}}>Password</div>
                    <input className='login_input' type='password'
                        onChange={(e) => e.target.value}
                    />
                </div>
                <div className='button_container'>
                    <div className='login_button'>Login</div>
                    <div className='register_button'>Register</div>
                </div>
              </section>
            </div>
        )
    }
}