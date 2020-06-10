import React from 'react';
function Fruits(props) {
    return (
        <div>
            <h1>Today we eat {props.first_fruit}.</h1>
            <h1>We also eat {props.second_fruit}.</h1>
        </div>
    )
}

export default Fruits;