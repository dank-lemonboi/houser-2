import React, { Component } from 'react'
import Header from '../header'
import '../styles/wizard4.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'

import { getLoan, getMortgage } from '../../ducks/houseReducer'


class wizard4 extends Component {
  constructor() {
    super()

    this.cancel = this.cancel.bind(this)
}

cancel() {
    this.props.history.push('/dashboard')
} 
    render() {
      const { getLoan, getMortgage } = this.props
      const { loan_amount, monthly_mortgage } = this.props
        return(
            <div className='wizard_parent_container'>
            <Header />
              <div className='wizard_container'>
                <div className='new_listing_top'>
                  <div className='new_listing_text'>Add New Listing</div>
                  <div className='cancel_button' onClick={ () => this.cancel()}>Cancel</div>
                </div>
                <div className='progress_steps'>
                  <p className='steps'>Step 4</p>
                  <div className='wizard_step_1'>
                  <img src={Completed} alt="Completed step" />
                  <img src={Completed} alt="Completed step" />
                  <img src={Completed} alt="Completed step" />
                  <img src={Active} alt="active step" />
                  <img src={Inactive} alt="inactive step" />
                  </div>
                </div>

                <div className='input_wrapper'>
                <div className='wiz4_address_section'>
                <span>Loan Amount</span>
                <input 
                    onChange={ (e) => getLoan( e.target.value ) }
                    value={ loan_amount }
                />
              </div>
              <div className='wiz4_address_section'>
              <span>Monthly Mortgage</span>
              <input 
                  onChange={ (e) => getMortgage( e.target.value ) }
                  value={ monthly_mortgage }
              />
            </div>
                </div>
                <section className='button_container'>
                   <div onClick={ () => this.props.history.goBack() } className='back_button'>Previous Step</div> 
                   <Link to='/wizard5'>
                    <div className='next_button'>Next Step</div>
                   </Link>
               </section>
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    loan_amount: state.loan_amount,
    monthly_mortgage: state.monthly_mortgage
  }
}

export default connect(mapStateToProps, {getLoan, getMortgage} )(wizard4)