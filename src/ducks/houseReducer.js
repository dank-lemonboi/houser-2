const initialState = {
    houseName: '',
    houseDescription: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image_url: '',
    loan_amount: '',
    monthly_mortgage: '',
    desired_rent: ''
}

const GET_HOME_NAME = "GET_HOME_NAME"
const GET_DESCRIPTION = "GET_DESCRIPTION"
const GET_ADDRESS = "GET_ADDRESS"
const GET_CITY = 'GET_CITY'
const GET_STATE = 'GET_STATE'
const GET_ZIP = 'GET_ZIP'
const GET_IMG_URL = 'GET_IMG_URL'
const GET_LOAN_AMOUNT = 'GET_LOAN_AMOUNT'
const GET_MONTHLY_MORTGAGE = 'GET_MONTHLY_MORTGAGE'
const GET_DESIRED_RENT = 'GET_DESIRED_RENT'
const CLEAR_FIELDS = 'CLEAR_FIELDS'

export function getHomeName(name) {
    return {
        type: GET_HOME_NAME,
        payload: name
    }
}

export function getDescription(description) {
    return {
        type: GET_DESCRIPTION,
        payload: description
    }
}

export function getAddress(address) {
    return {
        type: GET_ADDRESS,
        payload: address
    }
}

export function getCity(city) {
    return {
        type: GET_CITY,
        payload: city
    }
}

export function getState(state) {
    return {
        type: GET_STATE,
        payload: state
    }
}

export function getZip(zip) {
    return{
        type: GET_ZIP,
        payload: zip
    }
}

export function getUrl(url) {
    return{
        type: GET_IMG_URL,
        payload: url
    }
}

export function getLoan(loan) {
    return {
        type: GET_LOAN_AMOUNT,
        payload: loan
    }
}
export function getMortgage(mortgage) {
    return {
        type: GET_MONTHLY_MORTGAGE,
        payload: mortgage
    }
}

export function getRent(rent) {
    return {
        type: GET_DESIRED_RENT,
        payload: rent
    } 
}

export function cancel(initialState) {
    return {
        type: CLEAR_FIELDS,
        payload: initialState
    }
}
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_HOME_NAME:
           return Object.assign({}, state, { houseName: action.payload } )
        case GET_DESCRIPTION:
           return Object.assign({}, state, { houseDescription: action.payload } )
        case GET_ADDRESS:
            return Object.assign({}, state, { address: action.payload } )
        case GET_CITY:
            return Object.assign({}, state, { city: action.payload } )
        case GET_STATE:
            return Object.assign({}, state, { state: action.payload } )
        case GET_ZIP:
            return Object.assign({}, state, { zip: action.payload } )
        case GET_IMG_URL:
            return Object.assign({}, state, { image_url: action.payload } )
        case GET_LOAN_AMOUNT:
            return Object.assign({}, state, { loan_amount: action.payload } )
        case GET_MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthly_mortgage: action.payload } )
        case GET_DESIRED_RENT:
            return Object.assign({}, state, { desired_rent: action.payload })
        case CLEAR_FIELDS:
            return Object.assign( {}, {initialState: action.payload} )
        default:
            return state
    }
}