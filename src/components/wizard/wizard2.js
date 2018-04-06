import React, { Component } from 'react'
import Header from '../header'
import '../styles/wizard2.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'

import { getAddress, getCity, getState, getZip, cancel } from '../../ducks/houseReducer'

class wizard2 extends Component {
  constructor() {
    super()

    this.cancel = this.cancel.bind(this)
}

cancel() {
    this.props.cancel()
    this.props.history.push('/dashboard')
}
    render() {
      const { getAddress, getCity, getState, getZip } = this.props
      const { address, city, state, zip } = this.props
        return(
            <div className='wizard_parent_container'>
            <Header />
              <div className='wizard_container'>
                <div className='new_listing_top'>
                  <div className='new_listing_text'>Add New Listing</div>
                  <div className='cancel_button' onClick={ () => this.cancel() }>Cancel</div>
                </div>
                <div className='progress_steps'>
                  <p className='steps'>Step 2</p>
                  <div className='wizard_step_1'>
                  <img src={Completed} alt="active step" />
                  <img src={Active} alt="active step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                  </div>
                </div>

                <div className='wizard2_input_wrapper'>
                <div className='wiz2_address_section'>
                  <span>Address</span>
                  <input 
                      onChange={ (e) => getAddress(e.target.value) }
                      value={address}
                  />
                </div>
                <div className='wiz2_city_section'>
                  <span>City</span>
                  <input 
                      onChange={ (e) =>  getCity(e.target.value) }
                      value={city}
                  />
                </div>
                <div className='wiz2_state_section'>
                  <span>State</span>
                  <input 
                      onChange={ (e) => getState(e.target.value)}
                      value={state}
                  />
                </div>
                <div className='wiz2_zip_section'>
                  <span>Zip</span>
                  <input 
                      onChange={ (e) => getZip(e.target.value) }
                      value={zip}
                  />
                </div>


                </div>


                  <section className='button_container'>
                    <div onClick={ () => this.props.history.goBack() } className='back_button'>Previous Step</div>
                  <Link to='/wizard3'>
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
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
  }
}

export default connect(mapStateToProps, { getAddress, getCity, getState, getZip })(wizard2)