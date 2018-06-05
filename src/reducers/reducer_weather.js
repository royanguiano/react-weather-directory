import { FETCHWEATHER } from '../actions/index'

export default function( state = [], action ){
    switch( action.type ){
        case FETCHWEATHER: 
            return [ action.payload.data, ...state ]
    }
    return state
}