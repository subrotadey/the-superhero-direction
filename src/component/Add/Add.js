import React from 'react';
import './Add.css'

const Add = (props) => {
    const {hire} = props;
    let totalPrice = 0;
    for(const employee of hire){
        totalPrice = totalPrice + employee.salary;
    }

    return (
        <div className="add">
            
            <h3>Hired : {props.hire.length}</h3>
            <p>Total Cost: {totalPrice}</p>
        </div>
    );
};

export default Add;