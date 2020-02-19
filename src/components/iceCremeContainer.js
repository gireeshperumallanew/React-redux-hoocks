import React from 'react';
import { connect } from 'react-redux';
// import { buyIceCreme } from './iceCreme';


const iceCremeContainer = (props) => {
    return (
        <div>
            <h1>Number of cakes {props.numOfIceCreme}</h1>
            <button onClick="{props.buyIceCreme}">Buy iceCreme</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreme: state.numOfIceCreme
    }
}


/* export default connect(null, mapStateToProps)(iceCremeContainer) */

export default iceCremeContainer;





