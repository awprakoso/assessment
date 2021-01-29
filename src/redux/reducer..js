import {combineReducers} from 'redux'

const initialStateShoes = {
    shoesData: [],
    isLoading: false,
}

const initialStateBag = {
    shoppingList: []
}

const initialStateDetails = {
    details: []
}

const shoesList = (state = initialStateShoes, action) => {
    switch (action.type){
        case 'GET_SHOES':{
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_SHOES_SUCCESS':{
            return {
                ...state,
                shoesData: action.payload,
                isLoading: false
            }
        }
        default:
            return state;
    }
}

const shoppingBag = (state = initialStateBag, action) => {
    switch (action.type){
        case 'ADD_TO_BAG':{
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.payload]
            }
        }
        default:
            return state;
    }
}

const shoesDetails = (state = initialStateDetails, action) => {
    switch (action.type){
        case 'GET_SHOES_DETAILS':{
            return {
                ...state,
                details: action.payload
            }
        }
        default:
            return state;
    }
}

export default combineReducers({
    shoesList, shoppingBag, shoesDetails
})