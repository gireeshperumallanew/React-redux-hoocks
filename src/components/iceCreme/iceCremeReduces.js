import BUY_ICECREME from './iceCremeType'


const initialState = {
    numOfIceCreme = 10
}

const iceCremeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREME:
            return {
                ...numOfIceCreme,
                numOfIceCreme: numOfIceCreme + 1
            }
        default: return state 
    }
}



export default iceCremeReducer;