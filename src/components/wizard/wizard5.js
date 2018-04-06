import React, { Component } from 'react'
import Header from '../header'
import '../styles/wizard5.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import Active from '../../assets/step_active.png'
import Completed from '../../assets/step_completed.png'

import { getRent, cancel } from '../../ducks/houseReducer'


class wizard5 extends Component {
  constructor() {
    super()

    this.cancel = this.cancel.bind(this)
    this.complete = this.complete.bind(this)
}

cancel() {
    this.props.cancel()
    this.props.history.push('/dashboard')
} 

complete() {
  const { houseName, houseDescription, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent } = this.props

  axios.post('/api/house/create', { houseName, houseDescription, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent })
  .then( this.props.history.push('/dashboard') )
 
}
    render() {
        return(
            <div className='wizard_parent_container'>
            <Header />
              <div className='wizard_container'>
                <div className='new_listing_top'>
                  <div className='new_listing_text'>Add New Listing</div>
                  <div className='cancel_button' onClick={ () => this.cancel()}>Cancel</div>
                </div>
                <div className='progress_steps'>
                  <p className='steps'>Step 5</p>
                  <div className='wizard_step_1'>
                  <img src={Completed} alt="Complete step" />
                  <img src={Completed} alt="Completed step" />
                  <img src={Completed} alt="Completed step" />
                  <img src={Completed} alt="Completed step" />
                  <img src={Active} alt="active step" />
                  </div>
                </div>

                <div className='input_wrapper'>
                  <div className='recommended_rent'>Recommended Rent $ {+this.props.monthly_mortgage * 1.25}</div>
                  <div>
                    <span>Desired Rent</span>
                    <input 
                      onChange={ (e) => this.props.getRent(e.target.value)}
                      value={this.props.desired_rent}
                    />
                  </div>
                </div>
                <section className='button_container'>
                <div onClick={ () => this.props.history.goBack() } className='back_button'>Previous Step</div>                 
                
                  <div className='next_button'
                  onClick={ () => this.complete() }
                  >
                  Complete
                  </div>
                
                </section>
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    houseName: state.houseName,
    houseDescription: state.houseDescription,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    image_url: state.image_url,
    loan_amount: state.loan_amount,
    monthly_mortgage: state.monthly_mortgage,
    desired_rent: state.desired_rent
  }
}

export default connect(mapStateToProps, { getRent, cancel })(wizard5)