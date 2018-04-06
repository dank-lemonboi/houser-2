import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './styles/filter.css'

class Filter extends Component {
    constructor() {
        super()

        this.state = {
            value: 0
        }
    }

    filter() {
        axios.get(`/api/house/read?filterValue=${ +this.state.value }`).then( res => {
            console.log('We did a query!')
        })
    }

    reset() {

    }
    render(){
        return(
            <div className='filter_body'>
                <span>List properties with "desired rent" greater than: $ </span>  
                    <input className='filter_input'
                        onChange={ (e) => this.setState({value: e.target.value}) }
                        placeholder='0'
                        />
                    
                     <div className='filter' onClick=''>Filter</div>
                     <div className='reset' onClick=''>Reset</div>
                   
                  
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Filter)