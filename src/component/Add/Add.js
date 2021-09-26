import React from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import './Add.css'

const Add = (props) => {
    const {hire} = props;
    let totalPrice = 0;
    for(const employee of hire){
        totalPrice = totalPrice + employee.salary;
    }

    return (
        <div>
            <div className="add">
            
                <h3>Hired : {props.hire.length}</h3>
                <p>Total Cost: {totalPrice}</p>
            
            </div>
            <div>
                {
                    hire.map(employee => <AddEmployee img = {employee.img} name = {employee.name}></AddEmployee>)
                }
            </div>
        </div>
        
    );
};

export default Add;