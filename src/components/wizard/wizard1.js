import React, { Component } from 'react'
import Header from '../header'
import '../styles/wizard1.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'

import { getHomeName, getDescription } from '../../ducks/houseReducer'

class Wizard1 extends Component {
    constructor() {
        super()

        this.cancel = this.cancel.bind(this)
    }

    cancel() {
        this.props.history.push('/dashboard')
    }

    render() {
        console.log(this.props)
        return <div className="wizard_parent_container">
            <Header />
            <div className="wizard_container">
              <div className="new_listing_top">
                <div className="new_listing_text">Add New Listing</div>
                <div className="cancel_button" onClick={() => this.cancel()}>
                  Cancel
                </div>
              </div>
              <div className="progress_steps">
                <p className="steps">Step 1</p>
                <div className="wizard_step_1">
                  <img src={Active} alt="active step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                  <img src={Inactive} alt="inactive step" />
                </div>
              </div>

              <div className="input_wrapper">
                <span id='property_text'>Property Name</span>
                <input className="property_input_name" 
                       onChange={(e) => this.props.getHomeName(e.target.value)}
                       value={this.props.houseName}
                       
                />
                <span id='description_text'>Property Description</span>
                <textarea id="property_input_description" 
                          onChange={(e) => this.props.getDescription(e.target.value)}  
                          value={this.props.houseDescription}
                                 
                />
                <Link to="/wizard2">
                  <div className="next_button">Next Step</div>
                </Link>
              </div>
            </div>
          </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        houseName: state.houseName,
        houseDescription: state.houseDescription
    }
}

export default connect(mapStateToProps, { getHomeName, getDescription })(Wizard1)