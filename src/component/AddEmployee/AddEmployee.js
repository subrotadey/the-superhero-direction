import React from 'react';
import './AddEmployee.css'

const AddEmployee = (props) => {
    const {name,img} = props;
    return (
        <div className="add-employee">
            <img className="employee-img" src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default AddEmployee;