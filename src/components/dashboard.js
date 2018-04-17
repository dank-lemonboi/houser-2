import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import Delete from '../assets/delete_icon.png'

import './styles/dashboard.css'
import './styles/filter.css'


export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: [],
            value: 0
     }

        this.delete = this.delete.bind(this)
        this.filter = this.filter.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    componentDidMount() {
        axios.get('/api/me').then( () => {
            axios.get(`/api/house/read?filterValue=${this.state.value}`).then( res => {
                () => console.log('houses arrived!')
                this.setState({
                    houses: res.data
                })
            }).catch()
        }).catch( () => {this.props.history.push('/')})


        axios.get(`/api/house/read?filterValue=${this.state.value}`).then( res => {
            () => console.log('houses arrived!')
            this.setState({
                houses: res.data
            })
        }).catch()

        
    }

    delete(id) {
        axios.delete('/api/house/delete', { data: { house_id: +id } })
        .then( res => {console.log('House Deleted')
        this.setState({
            houses: res.data
        })
    }).catch()
    }
    
    filter() {
        axios.get(`/api/house/read?filterValue=${this.state.value}`).then( res => {
            this.setState({
                houses: res.data
            })
        })
    }

    reset() {
        this.setState({
            value: 0
        }, () => this.filter())
    }

    render(){
        console.log(this.state)

        const house = this.state.houses.map( house => {
            return (
                 <div className='house_tags' key={house.house_id}>
                    <div className='property_image_container'>
                        <img className='property_image' src={house.image_url} />
                    </div>
                    <div className='property_description'>
                        <span>{house.description}</span>
                    </div>
                    <div className='property_detail_parent'>
                        <span>Loan: ${house.loan} </span> <img onClick={ () => this.delete(house.house_id)} src={Delete}/>
                        <span>Monthly Mortgage: $ {house.mortgage}</span>
                        <span>Recommended Rend: $ {house.mortgage * 1.25}</span>
                        <span>Desired Rent: $ {house.desired_rent}</span>
                        <span>Address: {house.address}</span>
                        <span>City: {house.city}</span>
                    </div>
                 </div>
                
            )
        } )
    return(
        <div className='dashboard_container_parent'>
        <Header />
                <div className='dashboard_container'>
                <Link to='/wizard1'>
                  <div className='new_property_button'>Add New Property</div>
                </Link>
                <div className='filter_body'>
                <span>List properties with "desired rent" greater than: $ </span>  
                    <input className='filter_input'
                        onChange={ (e) => this.setState({value: e.target.value}) }
                        placeholder={this.state.value}
                        />
                    
                     <div className='filter' onClick={this.filter}>Filter</div>
                     <div className='reset' onClick={this.reset}>Reset</div>
                   
                  
            </div>
                <div className='line_break'></div>
                <span className='property_listing_title'>Home Listings</span>
                {house}
                </div>
        </div>
    )
 } 
}