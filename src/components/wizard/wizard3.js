import React, { Component } from 'react'
import Header from '../header'
import '../styles/wizard3.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUrl, cancel } from '../../ducks/houseReducer'

import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'



class wizard3 extends Component {
  constructor() {
    super()

    this.cancel = this.cancel.bind(this)
}

cancel() {
    this.props.cancel()
    this.props.history.push('/dashboard')
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
                  <p className='steps'>Step 3</p>
                  <div className='wizard_step_1'>
                  <img src={Completed} alt="completed step" />
                  <img src={Completed} alt="completed step" />
                  <img src={Active} alt="active step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                  </div>
                </div>

                <div className='input_wrapper'>
                  
                  <div className='image_preview'>
                    
                  <img className='image_container' 
                    src={this.props.image_url} 
                    alt="property_image" 
                    />
                  </div>
                  <span>Image URL</span>
                  <input className='image_url_input'
                         onChange={ (e) => { this.props.getUrl(e.target.value) }}
                         value={this.props.image_url}
                  />
                </div>
                <section className='button_container'>
                    <div onClick={ () => this.props.history.goBack() } className='back_button'>Previous Step</div>
                    <Link to='/wizard4'>
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
    image_url: state.image_url
  }
}

export default connect(mapStateToProps, { getUrl, cancel })(wizard3)